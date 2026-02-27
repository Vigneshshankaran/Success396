import { useCallback, useRef } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  amount: number; // in paise (e.g., 50000 = ₹500)
  currency?: string;
  name: string;
  description: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  onSuccess?: (response: RazorpayResponse) => void;
  onFailure?: (error: any) => void;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_placeholder";

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function useRazorpay() {
  const isLoading = useRef(false);

  const openCheckout = useCallback(async (options: RazorpayOptions) => {
    if (isLoading.current) return;
    isLoading.current = true;

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        throw new Error("Failed to load Razorpay SDK. Check your internet connection.");
      }

      const razorpayOptions = {
        key: RAZORPAY_KEY_ID,
        amount: options.amount,
        currency: options.currency || "INR",
        name: options.name,
        description: options.description,
        prefill: options.prefill || {},
        notes: options.notes || {},
        theme: {
          color: options.theme?.color || "#c5a059",
        },
        handler: (response: RazorpayResponse) => {
          console.log("✅ Payment Success!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
          options.onSuccess?.(response);
        },
        modal: {
          ondismiss: () => {
            console.log("Payment modal dismissed by user");
            options.onFailure?.({ reason: "dismissed" });
          },
        },
      };

      const rzp = new window.Razorpay(razorpayOptions);

      rzp.on("payment.failed", (response: any) => {
        console.error("❌ Payment Failed:", response.error);
        options.onFailure?.(response.error);
      });

      rzp.open();
    } catch (error) {
      console.error("Razorpay error:", error);
      options.onFailure?.(error);
    } finally {
      isLoading.current = false;
    }
  }, []);

  return { openCheckout };
}

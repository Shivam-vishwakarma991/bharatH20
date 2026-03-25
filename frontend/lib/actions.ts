// Note: GitHub Pages is a static hosting service and DOES NOT support Node.js Server Actions ('use server').
// To have a working contact form on static hosting, we use Web3Forms (a free form-handling service).
// You can get your free access key at: https://web3forms.com/

export async function sendEmail(formData: FormData) {
  // Convert FormData to a plain object
  const data = Object.fromEntries(formData.entries());

  // Prepare the payload for Web3Forms
  const payload = {
    // Note: You must add your Web3Forms Access Key here.
    // Get yours for free at https://web3forms.com/
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
    subject: `New Lead: ${data.name} (${data.businessName})`,
    from_name: "Bharat H2O Lead Form",
    ...data
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true };
    } else {
      console.error('Web3Forms Error:', result);
      return { success: false, error: result.message || 'Failed to send lead.' };
    }
  } catch (error) {
    console.error('Submission Error:', error);
    return { success: false, error: 'Failed to connect to the email service.' };
  }
}


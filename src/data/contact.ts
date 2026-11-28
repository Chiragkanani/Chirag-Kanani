export const contactEmail = "chiragkanani2003@gmail.com";
export const contactPhone = "9054687227";

const countryCallingCode = "91";

/** International (E.164) form, so the link dials correctly from any country. */
export const contactPhoneHref = `tel:+${countryCallingCode}${contactPhone}`;

/** Readable international format, e.g. "+91 90546 87227". */
export const contactPhoneDisplay = `+${countryCallingCode} ${contactPhone.slice(0, 5)} ${contactPhone.slice(5)}`;

export const whatsappUrl = `https://wa.me/${countryCallingCode}${contactPhone}`;

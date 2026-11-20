export const CONTACT = {
  linkedin: "https://www.linkedin.com/in/mafetechdev/",
  instagram: "https://www.instagram.com/mafetech4.0/",
  facebook: "https://www.facebook.com/profile.php?id=61596717633213",
  phoneDisplay: "+54 9 351 810-3272",
  phoneHref: "tel:+5493518103272",
  whatsappNumber: "5493518103272",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
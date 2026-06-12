import { useNavigate } from "react-router-dom"; // 1. Импортируем хук
import styles from "./linksStyles.module.scss";

import { LuFacebook, LuPhone } from "react-icons/lu";
import { CiInstagram, CiTwitter, CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Links = () => {
  const navigate = useNavigate(); // 2. Инициализируем хук внутри компонента

  const SOCIAL_LINKS = [
    { id: "fb", icon: <LuFacebook />, url: "https://facebook.com" },
    { id: "tw", icon: <CiTwitter />, url: "https://twitter.com" },
    { id: "inst", icon: <CiInstagram />, url: "https://instagram.com" },
  ];

  const QUICK_LINKS = [
    { text: "Browse Auctions", url: "/Browse" },
    { text: "How It Works", url: "/how-it-works" },
    { text: "Sell an Item", url: "/sell" },
    { text: "My Bids", url: "/profile/bids" },
    { text: "My Sales", url: "/profile/sales" },
  ];

  const SUPPORT_LINKS = [
    { text: "Help Center", url: "/support" },
    { text: "FAQ", url: "/faq" },
    { text: "Return Policy", url: "/returns" },
    { text: "Contact", url: "/contact" },
    { text: "Report Issue", url: "/report" },
  ];

  const CONTACT_INFO = [
    {
      id: "email",
      title: "Email",
      value: "info@bidmaster.com",
      icon: <MdOutlineEmail className={styles.Links_icon} />,
      href: "mailto:info@bidmaster.com",
    },
    {
      id: "phone",
      title: "Phone",
      value: "+1 (234) 567-890",
      icon: <LuPhone className={styles.Links_icon} />,
      href: "tel:+1234567890",
    },
    {
      id: "address",
      title: "Address",
      value: "123 Auction Street New York, NY 10001",
      icon: <CiLocationOn className={styles.Links_icon} />,
      href: "https://maps.google.com", // Внешняя ссылка
    },
  ];

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <section className={styles.Links_wrapper}>
      <section className={styles.Links_container_media}>
        <div className={styles.logo}>
          <span></span> BidMaster
        </div>
        <p>
          The most trusted online auction platform. Find unique and exclusive
          items from verified sellers.
        </p>

        <ul className={styles.social_media_Links}>
          {SOCIAL_LINKS.map((el) => (
            <li key={el.id}>
              <a
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={el.id}
              >
                {el.icon}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <ul className={styles.Links_container}>
        <h3>Quick Links</h3>
        {QUICK_LINKS.map((el) => (
          <li key={el.text}>
            {/* Перехватываем клик функцией handleNavigation */}
            <a href={el.url} onClick={(e) => handleNavigation(e, el.url)}>
              {el.text}
            </a>
          </li>
        ))}
      </ul>

      <ul className={styles.Links_container}>
        <h3>Support</h3>
        {SUPPORT_LINKS.map((el) => (
          <li key={el.text}>
            <a href={el.url} onClick={(e) => handleNavigation(e, el.url)}>
              {el.text}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.Links_container}>
        <h3>Contact</h3>
        <ul className={styles.contact_list}>
          {CONTACT_INFO.map((el) => (
            <li key={el.id}>
              <div className={styles.contact_title}>{el.icon}</div>
              <div>
                <strong>{el.title}</strong>
                {el.href.startsWith("http") || el.href.startsWith("/") ? (
                  <a
                    href={el.href}
                    onClick={(e) =>
                      el.href.startsWith("/") && handleNavigation(e, el.href)
                    }
                  >
                    {el.value}
                  </a>
                ) : (
                  <a href={el.href}>{el.value}</a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Links;

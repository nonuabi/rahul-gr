import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={styles.links_container}>
          <li>
            <Link to="/" style={styles.link_tag}>
              Coaching Details
            </Link>
          </li>
          <li>
            <Link to="/blogs" style={styles.link_tag}>
              Offered Courses
            </Link>
          </li>
          <li>
            <Link to="/contact" style={styles.link_tag}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

const styles = {
  links_container: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
  },
  link_tag: {
    background: "none",
    textDecoration: "none",
    border: " 1px solid #ffff",
    padding: "5px 10px",
    backgroundColor: "dodgerblue",
    color: "#fff",
  },
};

export default Layout;

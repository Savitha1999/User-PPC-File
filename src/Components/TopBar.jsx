import React, { useRef, useEffect } from "react";

const TopBar = ({ items, setActive, activeItem }) => {
  const topBarRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (topBarRef.current) {
        topBarRef.current.scrollLeft += e.deltaY; // Scroll horizontally based on the wheel movement
        e.preventDefault(); // Prevent the default vertical scroll behavior
      }
    };

    const topBarElement = topBarRef.current;
    topBarElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (topBarElement) {
        topBarElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={topBarRef}
      className="d-flex py-2"
      style={{
        width: '450px',
        overflowX: 'auto',
        overflowY: 'none',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
      }}
    >
      <ul
        className="list-unstyled d-flex mb-0"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          margin: 0,
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`text-center mx-3 ${activeItem === item.content ? "text-primary" : "text-secondary"}`}
            style={{
              cursor: "pointer",
              listStyle: "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft:'5px',
              paddingRight:'5px'
            }}
            onClick={() => setActive(item.content)}
          >
            <img
              src={item.icon}
              alt={item.text}
              className="d-block mx-auto"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <span className="d-block mt-1">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;

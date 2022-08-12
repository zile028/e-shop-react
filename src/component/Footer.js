import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          <h3>Site map</h3>
        </div>
        <div>
          <h3>Address</h3>
        </div>

        <div className="">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            repellat. Vel nobis maiores facilis at quisquam nam, consectetur
            quam debitis, rem unde ex ducimus laboriosam doloribus vitae eum
            ipsa iusto ipsum officiis blanditiis omnis asperiores quibusdam
            odio. Inventore tempore et praesentium maiores, in aspernatur
            numquam ullam provident fuga voluptatum amet?
          </p>
        </div>

        <div className="">
          <ul className="list-group">
            <MenuList />
          </ul>
        </div>

        <div className="">
          <ul className="list-group">
            <li>Street: Address here</li>
            <li>Email: office@techshop.com</li>
            <li>Phone: +012 345 6789</li>
            <li>Phone: +012 345 6789</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

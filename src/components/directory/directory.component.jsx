import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://i.ibb.co/y5NMbGF/97-A9-E7-FB-0-A16-47-A9-B1-BB-F5-A15-F0-C77-CB.jpg",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://i.ibb.co/rtwqwn3/1-A2-E28-E6-ED31-4-D93-9-C69-AD934-D17-BF82.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://i.ibb.co/9HB0VPF/2-A0-DF4-C0-D9-A3-4-CC3-861-A-130663-FA1-E4-E.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

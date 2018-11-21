import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Podcasts from "./components/Podcasts";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

const Data = [
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Simon :))))))",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt."
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quas numquam ipsa fuga nostrum porro voluptate nisi magni earum, ex esse facere, harum dolores corporis ratione modi! Ipsa, incidunt.",
    guest: "Blablaadfasdfasd",
    guestimg: "img.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Container>
         {/*  {Data.map((item, index) => {
            return ( */}
              <Podcasts
                /* number={index + 1}
                guest={item.guest}
                guestimg={item.guestimg} */
              >
                {/* {item.text} */}
              </Podcasts>
             {/* );
          })}  */}
        </Container>
        <Aboutme />
        <Footer />
      </div>
    );
  }
}

export default App;

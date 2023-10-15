import React from "react";
import "../assets/styles/Resilience.css";
import Section from "./Section";
import ResilienceButton from "./ResilienceButton";

const Resilience = (props) => {
  const cities = [
    {
      name: "יהודה ושומרון",
      phone: "029939378",
    },
    {
      name: "בנימין",
      phone: "025848600",
    },
    {
      name: "יהודה",
      phone: "029969560",
    },
    {
      name: "אשקלון",
      phone: "2452",
    },
    {
      name: "חוף אשקלון",
      phone: "086775598",
    },
    {
      name: 'אמ"ן- מערב הנגב',
      phone: "05530063863",
    },
    {
      name: "שדרות",
      phone: "086611140",
    },
    {
      name: "שדות הנגב",
      phone: "089941091",
    },
    {
      name: "אשכול",
      phone: "089965264",
    },
    {
      name: "חוסן הבדואי",
      phone: "0722212788",
    },
    {
      name: "שומרון",
      phone: "0979403",
    },
    {
      name: "שער הנגב",
      phone: "0512266275",
    },
    // Add more cities and phone numbers as needed
  ];

  // Create a function to generate city buttons
  const generateCityButton = (cityData) => {
    return cityData.map((city, index) => (
      <a
        href={`tel:${city.phone}`}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <ResilienceButton key={index} city={city.name} />
      </a>
    ));
  };

  // Organize the city buttons into rows
  const cityRows = [];
  for (let i = 0; i < cities.length; i += 3) {
    const citiesSubset = cities.slice(i, i + 3); // Get a subset of cities for each row
    cityRows.push(
      <div className="resilience_city_row" key={i}>
        {generateCityButton(citiesSubset)}
      </div>
    );
  }

  return (
    <div className="resilience_container">
      <div className="resilience_text">
        <Section title="מוקדי חוסן">
          <p>{/* Your text content here */}</p>
        </Section>
        <div className="resilience_cities_container">{cityRows}</div>
      </div>
    </div>
  );
};

export default Resilience;

import { useEffect, useState } from "react";
import Card from "../components/Card";

import devops from "../assets/jobimages/devops.jpg";
import aiml from "../assets/jobimages/aiml.jpg";
import cicd from "../assets/jobimages/cicd.jpg";
import intern from "../assets/jobimages/intern.png";

import { getOpenings } from "../api/api";

const Carrier = () => {

  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const images = [devops, aiml, cicd, intern];

  useEffect(() => {
    getOpenings()
      .then((res) => {
        setOpenings(res.data || []);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load openings");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="carrier" className="mt-20 mb-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        {loading && (
          <p className="col-span-full text-center">Loading openings...</p>
        )}

        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}

        {!loading && !error && openings.length === 0 && (
          <p className="col-span-full text-center">No openings found</p>
        )}

        {!loading &&
          !error &&
          openings.map((item, index) => (
            <Card
              key={index}
              props={{
                jobTitle: item.title,
                imageUrl: images[index % images.length],
                jobDescription: item.description
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default Carrier;
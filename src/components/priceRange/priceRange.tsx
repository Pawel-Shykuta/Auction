import { useEffect, useState } from "react";
import styles from "./priceRange.module.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAppStore } from "@/store/useAppStore";

const PriceRange = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);

  const setPriceMin = useAppStore((state) => state.setPriceMin);
  const setPriceMax = useAppStore((state) => state.setPriceMax);

  const maxPrice = 3000;

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setMin(values[0]);
      setMax(values[1]);
    }
  };

  useEffect(() => {
    setPriceMin(min * maxPrice);
    setPriceMax(max * maxPrice);
  }, [min, max]);

  return (
    <section className={styles.price_range}>
      <h2>
        Price Range: ${(min * maxPrice).toLocaleString()} - $
        {(max * maxPrice).toLocaleString()}
      </h2>

      <div className={styles.slider_container}>
        <Slider
          range
          min={0}
          max={100}
          value={[min, max]}
          onChange={handleSliderChange}
        />
      </div>
    </section>
  );
};

export default PriceRange;

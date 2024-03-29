document.addEventListener("DOMContentLoaded", () => {
  const weather = document.getElementById("weather");
  const weatherLocation = document.getElementById("weather-location");
  const localTime = document.getElementById("local-time");
  const weatherImg = document.getElementById("weather-img");
  localTime.textContent = getCurrentLocalTime();
  weatherImg.innerHTML = sunny;
  setInterval(() => {
    localTime.textContent = getCurrentLocalTime();
    weatherImg.innerHTML = sunny;
  }, 60000);
});

function getCurrentLocalTime() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return currentTime;
}

const sunny = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path d="m24,12.5v-1h-5.018c-.065-.92-.309-1.792-.697-2.58l4.346-2.53-.503-.863-4.347,2.531c-.495-.723-1.122-1.35-1.846-1.844l2.523-4.339-.864-.502-2.523,4.338c-.786-.385-1.655-.628-2.571-.693V0h-1v5.018c-.912.065-1.776.305-2.559.687L6.422,1.373l-.864.502,2.518,4.331c-.727.494-1.356,1.12-1.853,1.845L1.889,5.526l-.503.863,4.333,2.523c-.39.79-.635,1.665-.701,2.588H0v1h5.018c.065.92.309,1.792.698,2.581l-4.323,2.517.503.863,4.324-2.518c.492.719,1.115,1.342,1.834,1.835l-2.523,4.339.864.502,2.522-4.336c.789.389,1.662.634,2.584.699v5.018h1v-5.018c.927-.066,1.804-.313,2.597-.705l2.525,4.343.864-.502-2.528-4.347c.716-.493,1.337-1.115,1.827-1.834l4.336,2.524.503-.863-4.336-2.524c.386-.787.629-1.656.694-2.573h5.018Zm-12,5.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/>
</svg>
`;

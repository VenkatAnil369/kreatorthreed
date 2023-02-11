//click function
const imgClickHandler = (i) => {
  // dummy array
  const testimonialArray = [
    {
      id: 1,
      text: "Kreator 3D is dedicated to make 3D printing simple and efficient.",
    },
    {
      id: 2,
      text: "Our innovative product is the answer to your time-to-market needs.",
    },
    {
      id: 3,
      text: "We work to bring ideas alive. - edeX",
    },
    {
      id: 4,
      text: "We believe in the power of innovation and have built  a product that helps you breathe (keep your lungs working) ",
    },
    {
      id: 5,
      text: "It's all about making 3d printers a household item. We are on a mission to make printing easier - Whatever it takes!",
    },
  ];
  //moving arrow
  let testimonialElement = document.getElementById("testimonial-arrow");
  let imageElement = document.getElementById(i);
  let rect = imageElement.getBoundingClientRect();
  testimonialElement.style.left = 85 + rect.x + "px";
  // re-rendering text
  document.getElementById("replace").innerText = testimonialArray[i - 1].text;
};

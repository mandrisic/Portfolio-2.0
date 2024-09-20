// images for the bulletin board
import educationHeader from '../assets/img/ed-1.svg';
import workHeader from '../assets/img/wo-1.svg';
import techHeader from '../assets/img/te-2.svg';
import hobbiesHeader from '../assets/img/ho-1.svg';

// images for category Education
import edPad from '../assets/img/khvjhv.png';
import grad from '../assets/img/grad.svg';
import littlePad from '../assets/img/zrdjt.png';
import pin from '../assets/img/jztcj.png';
import pin2 from '../assets/img/lizfz.png';

// images for category Work Experience
import woPad2 from '../assets/img/vjhv.png';
import woPad3 from '../assets/img/kuzfv.png';
import baloon from '../assets/img/kkb.png';

// images for category Technologies
import note from '../assets/img/kvvh.png';
import working from '../assets/img/working.png';
import love from '../assets/img/love.png';

// images for category Hobbies
import hoNote from '../assets/img/iufzh.png';
import bike from '../assets/img/bike.png';
import ceda from '../assets/img/moreee.svg';
import star from '../assets/img/crochet-star.png';
import rabbit from '../assets/img/rabbit.png';

const data = {
    education: {
      title: "Education",
      headerImage: educationHeader,
      otherImages: [edPad, grad, littlePad, pin, pin, pin2],
      sections: [
        {
          title: "Degree",
          content: [
            "Master's degree, 2021.-2023.",
            "Information Technology and Publishing, Faculty of Humanities and Social Sciences, University of Osijek",
            "Bachelor's degree, 2018.-2021.",
            "Information Science, Faculty of Humanities and Social Sciences, University of Osijek"
          ]
        },
        {
          title: "Courses",
          content: [
            "Front-End Engineer Career Path (Codecademy, 2024.)",
            "Javascript Algorithms and Data Structures (freeCodeCamp, 2024.)"
          ]
        },
        {
          title: "Bonus",
          content: [
            "mag. inf. et comm. et mag. inf."
          ]
        }
      ]
    },

    experience: {
      title: "Experience",
      headerImage: workHeader,
      otherImages: [littlePad, woPad2, woPad3, baloon],
      sections: [
        {
          title: "Work",
          content: [
            "2022.-2023.",
            "Teaching assistant for a course Web Page Structuring at Faculty of Humanities and Social Sciences, University of Osijek"
          ]
        },
        {
          title: "Internship",
          content: [
            "2021.",
            "Internship at Sigmund Romberg Cultural Center Belisce",
            "2020.",
            "Internship at Public Library Valpovo"
          ]
        },
        {
          title: "Internship2",
          content: [
            "2020.",
            "Internship at Museum of Valpovo",
            "2019.",
            "Internship at Public library and reading room Belisce"
          ]
        }
      ]
    },

    technologies: {
      title: "Technologies",
      headerImage: techHeader,
      otherImages: [note, working, love],
      sections: [
        {
          title: "",
          content: [
            "Javascript",
            "React Native",
            "HTML & CSS",
            "Git & Github",
            "Figma, Inkscape"
          ]
        },
      ],
    },

    hobbies: {
      title: "Hobbies",
      headerImage: hobbiesHeader,
      otherImages: [hoNote, bike, ceda, star, rabbit],
      sections: [
        {
          title: "",
          content: [
            "Cycling",
            "Table tennis",
            "Crocheting",
            "Photography",
            "Coding side projects",
            "Designing"
          ]
        },
      ]
  }
  };
  
  export default data;
  
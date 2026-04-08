import Card from "./components/second/Card";

  const cards = [
    {
      image: "./image.jpg",
      middle: {
        dateColor: "text-blue-500",
        date: "12 Jan 2026",
        heading: "Exploring AI",
        text: "AI is transforming the future with rapid innovation."
      },
      bottom: {
        color: "bg-blue-500",
        first: {
          number: 120,
          text: "Likes"
        },
        second: {
          number: 45,
          text: "Comments"
        },
        third: {
          number: 10,
          text: "Shares"
        }
      }
    },
    {
      image: "./image.jpg",
      middle: {
        dateColor: "text-green-500",
        date: "25 Feb 2026",
        heading: "Web Dev",
        text: "Modern web apps are moving towards serverless architectures."
      },
      bottom: {
        color: "bg-green-500",
        first: {
          number: 200,
          text: "Likes"
        },
        second: {
          number: 80,
          text: "Comments"
        },
        third: {
          number: 25,
          text: "Shares"
        }
      }
    },
    {
      image: "./image.jpg",
      middle: {
        dateColor: "text-red-500",
        date: "10 Mar 2026",
        heading: "Open Source",
        text: "Contributing to open source boosts both skills and visibility."
      },
      bottom: {
        color: "bg-red-500",
        first: {
          number: 340,
          text: "Likes"
        },
        second: {
          number: 120,
          text: "Comments"
        },
        third: {
          number: 60,
          text: "Shares"
        }
      }
    }
  ];

export default function App() {
  return (
    <div className="gap-12 flex h-screen w-screen justify-center items-center bg-white"> {/* react fragment */}
      {
        cards.map((ele, index)=>{
          return <Card CardProps={ele} key={index}/>
        })
      }
    </div>
  );
}
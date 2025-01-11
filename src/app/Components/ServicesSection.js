"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";
import QuestionningLayout from "./QuestioningLayout";
import Pluss from "@/app/assets/pluss.png"

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    "title": "Enhanced External Counterpulsation1 (EECP)",
    "description": "Enhanced External Counterpulsation1 (EECP) is a non-invasive therapy designed to improve blood flow and reduce symptoms of angina. It uses pressure cuffs to assist circulation and support heart health. EECP has shown promising results with minimal side effects.",
    "questions": [
        {
            "question": "Are there any side effects to EECP?",
            "answer": "EECP is generally safe, but some may experience mild discomfort, skin irritation, or fatigue during treatment."
        },
        {
            "question": "How soon can I return to normal activities?",
            "answer": "Most patients can resume normal activities immediately after an EECP session without downtime."
        },
        {
            "question": "Is EECP covered by insurance?",
            "answer": "In many cases, EECP is covered by insurance, especially for conditions like angina or heart failure. Check with your provider."
        },
        {
            "question": "What maintenance sessions are recommended?",
            "answer": "After completing the initial treatment course, maintenance sessions may be recommended monthly or as advised by your physician."
        }
    ]
}
,
  {
    "title": "Chelation Therapy",
    "description": "Chelation Therapy is a treatment that removes heavy metals and toxins from the bloodstream, often used for cardiovascular health. It is minimally invasive and aims to enhance circulation. This therapy has been researched for its benefits in reducing arterial plaque.",
    "questions": [
        {
            "question": "What conditions can Chelation Therapy treat?",
            "answer": "Chelation Therapy is often used for heavy metal poisoning and is being studied for its potential benefits in improving cardiovascular health."
        },
        {
            "question": "Are there risks associated with Chelation Therapy?",
            "answer": "When administered by professionals, risks are minimal but may include mild side effects like nausea, headache, or fatigue."
        },
        {
            "question": "How long does a typical session last?",
            "answer": "A typical session lasts 1–3 hours, depending on the treatment plan and the patient’s condition."
        },
        {
            "question": "Is Chelation Therapy FDA-approved?",
            "answer": "Chelation is FDA-approved for heavy metal poisoning but not specifically for treating cardiovascular conditions."
        }
    ]
},
{
  "title": "Electrocardiogram (ECG/EKG)",
  "description": "An Electrocardiogram is a non-invasive test that records the electrical activity of the heart. It is a quick and painless way to detect irregular rhythms or signs of heart disease. ECG is a vital diagnostic tool for monitoring cardiac health.",
  "questions": [
      {
          "question": "What does an ECG detect?",
          "answer": "An ECG detects abnormal heart rhythms, blockages, and signs of previous or current heart attacks."
      },
      {
          "question": "How should I prepare for an ECG?",
          "answer": "You should wear comfortable clothing and avoid applying lotions or oils to the chest area before the test."
      },
      {
          "question": "Is an ECG painful or uncomfortable?",
          "answer": "No, the ECG is completely painless and involves placing small electrodes on the skin."
      },
      {
          "question": "How long does it take to get results from an ECG?",
          "answer": "Results are usually available immediately after the test is completed."
      }
  ]
},
{
  "title": "Arterial Clearance Therapy",
  "description": "Arterial Clearance Therapy is designed to enhance blood flow by addressing blockages in the arteries. This therapy combines medical procedures and lifestyle modifications to improve cardiovascular health. It is often used alongside other heart treatments.",
  "questions": [
      {
          "question": "How does Arterial Clearance Therapy work?",
          "answer": "The therapy works by reducing arterial blockages, improving circulation, and supporting overall heart health."
      },
      {
          "question": "Can this therapy prevent heart attacks?",
          "answer": "While not a guarantee, the therapy can significantly lower the risk of heart attacks by improving arterial health."
      },
      {
          "question": "What lifestyle changes are recommended alongside the therapy?",
          "answer": "A heart-healthy diet, regular exercise, and avoiding smoking are highly recommended to maximize therapy benefits."
      },
      {
          "question": "How many sessions are typically required?",
          "answer": "The number of sessions varies based on individual needs but usually ranges from 10–20."
      }
  ]
},
{
  "title": "Periscope Cardiovascular Testing",
  "description": "Periscope Cardiovascular Testing offers a detailed assessment of heart and vascular health. Using advanced diagnostic tools, it evaluates cardiac risks and guides treatment planning. This non-invasive test provides accurate and reliable results.",
  "questions": [
      {
          "question": "What is Periscope Cardiovascular Testing used for?",
          "answer": "It is used to assess heart and vascular health, detect risks, and guide personalized treatment plans."
      },
      {
          "question": "How is this test performed?",
          "answer": "The test is non-invasive and involves using sensors and monitors to evaluate heart and vascular function."
      },
      {
          "question": "Are there any risks involved with the test?",
          "answer": "No, the procedure is safe, painless, and carries no risks."
      },
      {
          "question": "How accurate is Periscope Cardiovascular Testing?",
          "answer": "The test is highly accurate and provides detailed insights into cardiovascular health and potential risks."
      }
  ]
}

];

export default function ServicesSectionEachCard() {
  const serviceContainer = useRef(null);
  const headings = useRef([]);
  const descriptions = useRef([]);
  const questionSets = useRef([]);

  useGSAP(() => {
    const section = serviceContainer.current;
    const headingElements = headings.current.filter(Boolean);
    const descriptionElements = descriptions.current.filter(Boolean);
    const questionElements = questionSets.current.filter(Boolean);

    // Hide all sections except the first one
    gsap.set([
      headingElements.slice(1),
      descriptionElements.slice(1),
      questionElements.slice(1)
    ], { opacity: 0, display: 'none' });

    // Create a timeline for each content transition
    contentData.forEach((_, index) => {
      if (index < contentData.length - 1) {
        const currentElements = [
          headingElements[index],
          descriptionElements[index],
          questionElements[index]
        ];

        const nextElements = [
          headingElements[index + 1],
          descriptionElements[index + 1],
          questionElements[index + 1]
        ];

        // Create individual ScrollTrigger for each transition
        ScrollTrigger.create({
          trigger: section,
          start: `${index * 100}% top`,
          end: `${(index + 1) * 100}% top`,
          onEnter: () => {
            // Show next section and animate transition
            gsap.set(nextElements, { display: 'block' });
            gsap.timeline()
              .to(currentElements, {
                opacity: 0,
                y: -50,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
              })
              .to(nextElements, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.in"
              }, "-=0.3");
          },
          onLeaveBack: () => {
            // Reverse animation when scrolling back up
            gsap.timeline()
              .to(nextElements, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                onComplete: () => gsap.set(nextElements, { display: 'none' })
              })
              .to(currentElements, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.in"
              }, "-=0.3");
          }
        });
      }
    });

    // Main ScrollTrigger for the container
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${(contentData.length - 1) * 100}%`,
      pin: true,
      pinSpacing: true,
      scrub: 1
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  return (
    <div ref={serviceContainer} className="w-screen min-h-screen  py-10 px-6 overflow-hidden">
      <div className="relative min-h-[200px]">
        {contentData.map((content, index) => (
          <div key={index} className="absolute top-0 left-0 w-full">
            <h1
              ref={el => headings.current[index] = el}
              className=" text-[2.8rem] leading-[3rem] md:text-start text-center md:text-[4.5rem] font-[500] w-full text-zinc-900"
            >
              {content.title}
            </h1>
            <p
              ref={el => descriptions.current[index] = el}
              className="w-[90%] md:pl-8 md:text-start text-center text-[1rem] md:text-[1.3rem] tracking-wider py-4 text-emerald-800"
            >
              {content.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-[60vh] mt-10 flex items-center">
        <div className=" w-[100%] md:w-[60%] md:pt-0 pt-[13vh] h-full">
          {contentData.map((content, index) => (
            <div
              key={index}
              ref={el => questionSets.current[index] = el}
              className="absolute w-full md:w-[50%]"
            >
              <div className="w-full flex flex-col gap-3 md:items-center items-start">
                {content.questions.map((question, qIndex) => (
                  <QuestionningLayout key={qIndex} question={question.question} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[40%] h-full hidden  md:flex items-center justify-center">
        <div className=" relative w-[40rem] h-full flex items-center justify-center">
            <div className=" w-[30rem] h-[90%] border rounded-t-full"></div>
            <Image src={Pluss} alt="plus" className=" absolute left-20 -top-3 w-14"/>
            <Image src={Pluss} alt="plus" className=" absolute left-1 top-4 w-20"/>
          </div>
        </div>
      </div>
    </div>
  );
}
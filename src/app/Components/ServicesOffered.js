export default function ServicesOffered(){
  const allServices=[
  {
    "name": "Enhanced External Counterpulsation",
    "description": "A non-invasive therapy that improves blood flow and reduces angina symptoms using pressure cuffs to support circulation."
  },
  {
    "name": "Chelation Therapy",
    "description": "A treatment that removes heavy metals and toxins from the bloodstream, helping improve cardiovascular health and circulation."
  },
  {
    "name": "Electrocardiogram (ECG/EKG)",
    "description": "A quick, painless test that records heart activity, helping detect irregular rhythms, blockages, and signs of heart disease."
  },
  {
    "name": "Arterial Clearance Therapy",
    "description": "A therapy aimed at reducing arterial blockages and enhancing circulation, often combined with lifestyle changes for heart health."
  },
  {
    "name": "Periscope Cardiovascular Testing",
    "description": "An advanced diagnostic test that assesses heart and vascular health, detects risks, and aids in personalized treatment planning."
  }
]
  return(
      <div className="w-full min-h-screen pt-16 md:pt-24 pb-8 md:pb-16">
          <div className="w-full h-full flex flex-col items-center px-4 md:px-0">
              <h1 className="text-2xl md:text-4xl lg:text-[3.5rem] leading-tight md:leading-[4rem] font-medium text-zinc-900 w-full  lg:w-[80%] text-center">
                  Discover Advanced Heart Care with Our Specialized Services
              </h1>
              
              <p className="text-base md:text-lg lg:text-[1.3rem] text-zinc-600 w-full md:w-[70%] lg:w-[50%] text-center mt-4 md:mt-2">
                  We provide innovative, non-invasive treatments to enhance cardiovascular health, improve circulation, and detect risks. Our cutting-edge therapies and diagnostics ensure effective heart care while prioritizing patient safety and comfort. Explore our specialized solutions for a healthier heart.
              </p>
              
              <div className="w-full md:w-[90%] mt-8 flex flex-wrap gap-4 md:gap-8 p-4 md:p-[5%] justify-center min-h-[100vh] border border-rose-700 bg-rose-500 bg-opacity-60 rounded-xl md:rounded-2xl">
                  {allServices.map((eachService,index)=>{
                      return(
                          <div 
                              key={index} 
                              className="w-full sm:w-[20rem] flex flex-col items-center gap-4 md:gap-6 justify-center p-6 md:h-[25rem] rounded-xl bg-zinc-200 shadow-lg shadow-zinc-800 shrink-0"
                          >
                              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border border-zinc-700"></div>
                              <h1 className="w-full md:w-[90%] text-center text-xl md:text-2xl lg:text-[1.8rem] leading-tight md:leading-8 font-medium text-zinc-900">
                                  {eachService.name}
                              </h1>
                              <p className="w-full md:w-full text-center text-base md:text-lg lg:text-[1rem] text-zinc-600 -mt-1 md:-mt-3">
                                  {eachService.description}
                              </p>
                          </div>
                      )
                  })}
              </div>
          </div>
      </div>
  )
}
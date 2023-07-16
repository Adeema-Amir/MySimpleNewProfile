/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Main() {
    return (
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-52 pb-24 mx-auto">
          <div id="about">
          <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Hi! I Am Adeema Amir
          </h1>
          </div>
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-400 text-center">
          Hi, Im Adeema Amir, a web developer with 2 years of experience 
          <br />
          in designing and developing web applications
          </h2>
          <div className="ml-6 text-center">
            <a
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <span className="justify-center">Start Learning</span>
              </div>
            </a>
            <a
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <span className="justify-center">Get Started</span>
              </div>
            </a>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <img
            className="object-center w-80 rounded-full mb-10 border shadow-md g327"
            alt="My Images"
            src="https://avatars.githubusercontent.com/u/105167729?v=4"
          />
        </div>

       <div id="team">
       <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Our Team
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Here is Our Team.
        </p>
       </div>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <img className="w-10" src="https://avatars.githubusercontent.com/u/105167729?v=4"/>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Adeema Amir
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Project Manager
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://avatars.githubusercontent.com/u/113040207?v=4"/>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Rana Reebaal Hussain
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
             Director
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://avatars.githubusercontent.com/u/104692519?v=4"/>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Rana Rabees Hussain
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Marketer
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://avatars.githubusercontent.com/u/104395071?v=4"/>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Rana Amir Hussain
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Ceo
            </p>
          </div>
        </div>

       <div id="profile">
       <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Our Profile
        </h2>
       </div>

        <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <a href="https://ranaverse.vercel.app/">
              <img className="h-96" src="1.jpg"/>
            </a>
            <h3 className="pt-3 font-semibold text-lg text-white">
              This Is My First Project
            </h3>
            <p id="kittas" className="pt-2 value-text text-md text-gray-200 fkrr1">
              This is our company party blog.
            </p>
          </div>
          <div className="ktq4">
            <a href="https://furniture-advertisement.vercel.app/">
              <img className="h-96" src="2.jpg"/>
            </a>
            <h3 className="pt-3 font-semibold text-lg text-white">
              This Is My Second Project
            </h3>
            <p  className="pt-2 value-text text-md text-gray-200 fkrr1">
              This is my simple project furniture advertisement.
            </p>
          </div>
        </div>
        <div id="skills">
       <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Our Skills
        </h2>
       </div>

    
       <marquee scrollamount="20">
        <div className="flex">
              <img className="w-40" src="html.jpg" alt="html" />
              <img className="w-40" src="css.jpg" alt="css" />
              <img className="w-40" src="javascript.jpg" alt="javascript" />
              <img className="w-40" src="typescript.png" alt="typescript" />
              <img className="w-40" src="django.jpg" alt="django" />
              <img className="w-40" src="python.jpg" alt="python" />
              <img className="w-40" src="node.jpg" alt="node" />
              <img className="w-40" src="react.jpg" alt="react" />
              <img className="w-40" src="php.jpg" alt="php" />
              <img className="w-40" src="sql.jpg" alt="sql" />
              <img className="w-40" src="vue.jpg" alt="vue" />
              <img className="w-40" src="java.jpg" alt="java" />
              <img className="w-40" src="c.jpg" alt="c" />
          </div>      
       </marquee>
        
        <section id="newsletter" className="relative pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl font-bold text-white">
                Subscribe to our newsletter
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-200">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                type="email"
                placeholder="adeemaamir1722@gmail.com"
                name="email"
                autoComplete="email"
                className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />{" "}
            </div>
          </div>
        </section>
      </section>
    );
  }
  
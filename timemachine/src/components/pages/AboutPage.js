import image from "./abouttimemachine.jpeg";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

const AboutPage = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              TimeMachine
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            This project is (ultimately) designed to replicate as closely as
            possible the experience of being able to talk to AI representations
            of people who are merely history at this point. Some of the early
            "Avatars" as I call them are historical writers and philosophers
            whose work I have admired and gained insight from.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            The technologies used to accomplish this include OpenAI's{" "}
            <strong>GPT-3</strong> and Amazon's <strong>Polly</strong> neural
            network-powered text-to-speech API. In the process of making this
            project so far I have learned a lot and realized my approach as it
            stands was far from ideal, and will need a complete re-architecting
            using more purpose-built technologies, but as it stands it more or
            less does most of what I wanted it to do.
          </p>
          <Link to="/" className="prose">
            <HomeIcon className="h-7 w-auto align-middle" />
            <strong>Home</strong>
          </Link>

          <figure>
            <img
              className="w-full rounded-lg"
              src={image}
              alt=""
              width={1310}
              height={873}
            />
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

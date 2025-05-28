export const UndetectableSection = () => {
  return (
    <div className="bg-black text-white py-20 px-4 md:p-20">
      <div className="mx-auto max-w-6xl text-center pt-18 lg:pt-26">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-white sm:text-balance">
            Undetectable by design.
          </h2>
          <p className="mt-4 text-lg lg:text-xl max-w-2xl mx-auto font-medium tracking-tight text-gray-400 leading-relaxed">
            No bots in the room. No Zoom guests. No screen-share trails. Works on everything.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {/* Feature 1: Doesn't join meetings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left lg:pr-8">
              <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                Doesn't join meetings
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Contextor never shows up in shared screens, recordings, or external meeting tools. It's fully hidden from everyone but you.
              </p>
            </div>
            <div className="lg:order-last">
              <img 
                src="/lovable-uploads/no-bot-required.png" 
                alt="Doesn't join meetings interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2: Invisible to screen-share */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left lg:order-last lg:pl-8">
              <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                Invisible to screen-share
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Contextor never shows up in shared screens, recordings, or external meeting tools. It's fully hidden from everyone but you.
              </p>
            </div>
            <div className="lg:order-first">
              <img 
                src="https://cluely.com/_next/static/media/screen.8c07aba8.png" 
                alt="Invisible to screen-share interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Feature 3: Follow your eyes */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            <div className="text-left lg:pr-8">
              <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                Follow your eyes
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Contextor's window is fully moveable so you can position it exactly where you're looking — without ever breaking concentration.
              </p>
            </div>
            <div className="lg:order-last">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <img 
                  src="/lovable-uploads/620dde73-3e27-405e-9afc-71935d439412.png" 
                  alt="Follow your eyes interface" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

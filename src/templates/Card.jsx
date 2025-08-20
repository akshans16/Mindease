import React from "react";

function Card({ image, title, message, buttonText, action }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .floating-element { animation: float 3s ease-in-out infinite; }
          .glass-effect {
            background: #edeaff;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.15);
          }
        `,
        }}
      />

      <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
        {/* top-right soft gradient blob */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-300/20 to-blue-500/50 rounded-full -translate-y-16 translate-x-16 z-0 pointer-events-none border border-sky-300/40" />

        {/* content layer */}
        <div className="relative z-10">
          {/* floating image with gradient frame */}
          <div className="floating-element mb-6 flex justify-start">
            <div className="w-20 h-20 bg-gradient-to-tr from-sky-400 to-blue-700 rounded-2xl p-1 ">
              <img
                src={image}
                alt={title}
                className="w-full h-full rounded-xl object-cover block"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

          <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          onClick={action}>
            {buttonText}
             
          </button>
        </div>
      </div>
    </>
  );
}


export default Card;

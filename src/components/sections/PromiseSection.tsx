import Image from 'next/image';

const PromiseSection = () => {
  const cards = [
    {
      title: 'Awaken',
      subtitle: 'Innate Wisdom:',
      description: 'Uncover your blind spots and reconnect with your innate wisdom and self-regulation.',
      image: '/images/awaken-icon.jpg',
      imageAlt: 'Concentric circles purple gradient abstract art representing Awaken Innate Wisdom'
    },
    {
      title: 'Align',
      subtitle: 'Values & Actions:',
      description: 'Harmonize your inner compass with your external actions, cultivating peace, purpose, and balance.',
      image: '/images/align-icon.jpg',
      imageAlt: 'Interlocking chain links purple gradient abstract art representing Align Values & Actions'
    },
    {
      title: 'Amplify',
      subtitle: 'Authentic Impact:',
      description: 'Harness your true strengths to inspire trust, drive results, and leave a lasting legacy.',
      image: '/images/amplify-icon.jpg',
      imageAlt: 'Curved wave lines purple gradient abstract art representing Amplify Authentic Impact'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-6 bg-white bottom-0">
      <div className="text-center mb-12">
        <span className="text-[#6433F6] text-[12px] font-semibold uppercase tracking-widest bg-white px-5 py-1 rounded-full inline-block mb-6 shadow-md border border-gray-200">
          The Promise
        </span>

            <h2 className="font-bold text-4xl md:text-4xl leading-tight mb-4 text-gray-900 tracking-normal">
              Lead from Your Core.{' '}
              <span className="bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] bg-clip-text text-transparent">
                Inner Field of Living Intelligence.
              </span>
            </h2>

        <p className="text-lg text-[#202020] font-normal">
          Through bespoke{' '}
          <span className="font-semibold">one-on-one</span> and team coaching, Neerja helps you
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-dm-sans mt-2 -translate-x-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
        className="bg-[#FFFFFF] rounded-[32px] p-3 border border-[#fbf9fb] shadow-[0_12px_20px_rgba(0,0,0,0.10)] transition duration-300 ease-in-out hover:shadow-[0_16px_64px_rgba(0,0,0,0.2)]"  >
              
                {/* Image */}
          <div className="rounded-[24px] p-0 w-[320px] h-[280px] bg-[radial-gradient(ellipse_at_top_left,_#FFFFFF_10%,_#EDE7FF_80%)] shadow-sm flex items-center justify-center">

              <Image
                src={card.image} 
                alt={card.imageAlt}
                width={320}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-left font-dm-sans pt-2 pl-1">
              <h3 className="text-lg font-semibold text-[#1B1B1B] mb-2 leading-tight  tracking-tighter">
                <span className="bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] text-transparent bg-clip-text font-semibold">
                  {card.title}
                </span>{' '}
                {card.subtitle}
              </h3>
              <p className="text-base text-[#333333] leading-normal max-w-[280px] tracking-tighter">
                {card.description}
              </p>
            </div>
          </div>
        ))}
    </div>
    </section>
  );
};

export default PromiseSection;


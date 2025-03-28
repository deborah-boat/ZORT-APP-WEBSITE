
interface PricingCardProps {
  title: string;
  price?: string;
  description: string;
  buttonText: string;
  href: string;
}

const PricingCard = ({ title, price, description, buttonText, href }: PricingCardProps) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {price && <p className="text-gray-300 mb-4">{price}</p>}
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={href}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition duration-300"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingCard;

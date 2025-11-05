function Header() {
  return (
    <div className='bg-orange-100 p-3 sm:p-4 md:p-6'>
      <header className="text-center py-6 sm:py-8 md:py-10 lg:py-12 bg-orange-950 text-white rounded-lg md:rounded-xl shadow-xl px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-400">
          The Geeta Wisdom Guide
        </h1>
        <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-orange-200 max-w-2xl mx-auto px-2">
          Ask your life's problems. Receive guidance from ancient wisdom.
        </p>
      </header>
    </div>
  );
}

export default Header;
export default function CSSPositioning() {
  return (
    <main className='w-full h-full'>
      <section className='bg-gray-300 h-screen'>
        <div className='container'>
          <h1>Ullamco ea duis do tempor excepteur culpa sunt esse.</h1>
          <div className='relative'>
            <img src='https://picsum.photos/200/300' alt='random' />
            <div className='flex absolute'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const Card = () => {
  return (
    <div className='bg-white rounded border border-indigo-700 w-full max-w-[20rem] px-3 py-4'>
      <h5 className='text-indigo-700 font-bold'>Ad deserunt velit.</h5>
      <p className='text-gray-700 pt-2'>
        Id dolor ullamco tempor voluptate occaecat nulla in. Et laborum velit commodo dolore nulla ullamco.
      </p>
    </div>
  );
};

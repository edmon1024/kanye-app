const Components = {
  h1: ({ children }) => (
    <h1>
      {children}

      <style jsx>{`
        h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
	  color: #FFFFFF;
        }
      `}</style>
    </h1>
  ),
  p: ({ children }) => (
    <p>
      {children}

      <style jsx>{`
        p {
          font-size: 1.7rem;
	  color: #FFFFFF;
        }
      `}</style>
    </p>
  ),
  a: ({ href, children }) => (
    <a href={href}>
      {children}

      <style jsx>{`
        a {
          color: var(--color-1);
        }
      `}</style>
    </a>
  )
};

export default Components;

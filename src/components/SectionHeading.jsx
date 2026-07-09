const SectionHeading = ({ index, eyebrow, title, id }) => {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index ? <span aria-hidden="true">{index}</span> : null}
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        <span className="text-muted">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;

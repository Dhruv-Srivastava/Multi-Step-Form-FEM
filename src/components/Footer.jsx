import Button from "./Button";

export default function Footer({ formSectionView, variant="next-step", content="Next Step"}) {
  return (
    <footer>
      <Button
        variant={variant}
        formSectionView={formSectionView}
        type="submit"
      >
      {content}
      </Button>

      {formSectionView > 1 && (
        <Button
          variant="go-back"
          type="submit"
          formSectionView={formSectionView}
        >
          Go Back
        </Button>
      )}
    </footer>
  );
}

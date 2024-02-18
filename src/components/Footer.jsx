import Button from "./Button";

export default function Footer({ formSectionView }) {
  return (
    <footer>
      <Button
        variant="next-step"
        formSectionView={formSectionView}
        type="submit"
      >
        Next Step
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

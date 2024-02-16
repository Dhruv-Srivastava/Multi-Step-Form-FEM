import Button from "./Button";

export default function Footer({ setFormSectionView, formSectionView }) {
  return (
    <footer>
      <Button
        variant="go-back"
        setFormSectionView={setFormSectionView}
        formSectionView={formSectionView}
      >
        Go Back
      </Button>
      <Button
        variant="next-step"
        setFormSectionView={setFormSectionView}
        formSectionView={formSectionView}
      >
        Next Step
      </Button>
    </footer>
  );
}

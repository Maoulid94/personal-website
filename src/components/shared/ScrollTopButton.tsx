import "../../styles/components/scrollTopButton.css";

type ScrollTopButtonProps = {
  visible: boolean;
};

export default function ScrollTopButton({ visible }: ScrollTopButtonProps) {
  if (!visible) return null;
  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

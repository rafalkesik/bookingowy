import Link from "next/link";
import styles from "./Roadmap.module.css";
import { colors, functionalities } from "@/lib/roadmap";
import Modal from "@/components/Modal";

type SearchParamProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Roadmap({ searchParams }: SearchParamProps) {
  return (
    <section className={styles.timeline}>
      { searchParams.modal ? <Modal modalIndex={Number(searchParams.modal)}/> : "" }

      <h1 className={styles.timeline__title}>
        Roadmapa aplikacji
      </h1>

      <p className={styles.timeline__leader}>
        Ta aplikacja będzie rozwijana w poniższej kolejności.
        Jeśli masz pomysł na nowe funkcjonalności,
        lub masz uwagi do roadmapy, <Link href="mailto:rafal.kesik.g@gmail.com" title="Wyślij e-maila">napisz do mnie</Link>.
      </p>

      <div className={styles.timeline__wrapper}>
        {/* Step ~ */}
        { functionalities.map((functionality, index) => (
            <div
              className={styles.timeline__card}
              style={{ "--card-color": colors[index % colors.length] } as React.CSSProperties}
              key={"card-" + index}
            >
              <div className={styles.timeline__head}>
                <div className={styles.timeline__number}>
                  <span>{ index < 10 ? "0"+index : index }</span>
                </div>
                <h2 className={styles.timeline__heading}>
                  <span>{functionality.subtitle}</span>
                  {functionality.title}
                </h2>
              </div>
              <div className={styles.timeline__body}>
                <p>
                  {functionality.body}
                </p>
                { functionality.mustHave ?
                  <Link
                    className="secondary-button-sm"
                    href={`/roadmap?modal=${index}`}
                    scroll={false}
                  >
                    Czytaj więcej
                  </Link> : ""
                } 
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}
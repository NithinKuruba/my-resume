import * as React from "react";
import styles from "../styles/Animations.module.css";

export function UpDown({ children }: { children: React.ReactNode }) {
  return <div className={styles.updown}>{children}</div>;
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return <div className={styles.updownWide}>{children}</div>;
}

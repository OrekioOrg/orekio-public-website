import { basePath } from "@/base-path";
import type { Locale } from "@/i18n/config";
import { HOME_VIDEO } from "@/integrations";

/* La vidéo ne se télécharge qu'à la lecture : seule son affiche pèse sur la page. */
export function DemoVideo({
  lang,
  title,
  className = "",
}: {
  lang: Locale;
  title: string;
  className?: string;
}) {
  const video = HOME_VIDEO[lang];
  if (!video) return null;
  return (
    <video
      controls
      playsInline
      preload="none"
      poster={`${basePath}${video.poster}`}
      aria-label={title}
      className={`aspect-video w-full rounded-[10px] border border-outline bg-ink ${className}`}
    >
      <source src={`${basePath}${video.src}`} type="video/mp4" />
      {video.captions ? (
        <track kind="captions" srcLang={lang} src={`${basePath}${video.captions}`} default />
      ) : null}
    </video>
  );
}

interface VideoEmbedProps {
  youtubeId: string;
  title?: string;
}

export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-ink/5">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

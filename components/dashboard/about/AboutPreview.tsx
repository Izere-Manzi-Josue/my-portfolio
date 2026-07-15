interface AboutPreviewProps {
  name: string;
  jobTitle: string;
  shortIntro: string;
  description: string;
  image: string;
}

export default function AboutPreview({
  name,
  jobTitle,
  shortIntro,
  description,
  image,
}: AboutPreviewProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col items-center text-center">
        {image ? (
          <img
            src={image}
            alt={name || "Profile"}
            className="mb-6 h-40 w-40 rounded-full border-4 border-orange-500 object-cover"
          />
        ) : (
          <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            No Image
          </div>
        )}

        <h2 className="text-3xl font-bold">{name || "Your Name"}</h2>

        <p className="mt-2 text-lg font-medium text-orange-500">
          {jobTitle || "Software Developer"}
        </p>
      </div>

      <hr className="my-6 border-slate-200 dark:border-slate-700" />

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
            Short Introduction
          </h3>

          <p className="text-slate-600 dark:text-slate-300">
            {shortIntro || "Your short introduction will appear here."}
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
            About Me
          </h3>

          <p className="whitespace-pre-line text-slate-600 dark:text-slate-300">
            {description || "Your description will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
}

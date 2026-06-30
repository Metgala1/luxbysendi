"use client";

import { useState } from "react";

type Service = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  images: File[];
};

export default function ServicesPage() {
  const [service, setService] = useState<Service>({
    name: "",
    subtitle: "",
    description: "",
    features: [""],
    images: [],
  });

  const [previews, setPreviews] = useState<string[]>([]);

  // 📸 Handle multiple images
  const handleImagesUpload = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);

    setService((prev) => ({
      ...prev,
      images: [...prev.images, ...fileArray],
    }));

    const newPreviews = fileArray.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  // ❌ Remove image
  const removeImage = (index: number) => {
    const updatedImages = service.images.filter(
      (_, i) => i !== index
    );

    const updatedPreviews = previews.filter(
      (_, i) => i !== index
    );

    setService({ ...service, images: updatedImages });
    setPreviews(updatedPreviews);
  };

  // ✏️ Features
  const handleFeatureChange = (value: string, index: number) => {
    const updated = [...service.features];
    updated[index] = value;
    setService({ ...service, features: updated });
  };

  const addFeature = () => {
    setService({
      ...service,
      features: [...service.features, ""],
    });
  };

  const removeFeature = (index: number) => {
    const updated = service.features.filter((_, i) => i !== index);
    setService({ ...service, features: updated });
  };

  // 🚀 Submit
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("name", service.name);
      formData.append("subtitle", service.subtitle);
      formData.append("description", service.description);
      formData.append(
        "features",
        JSON.stringify(service.features)
      );

      service.images.forEach((img) => {
        formData.append("images", img); // 👈 multiple files
      });

      const res = await fetch("/api/services", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      alert("Service created successfully ✨");

      setService({
        name: "",
        subtitle: "",
        description: "",
        features: [""],
        images: [],
      });

      setPreviews([]);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] p-10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-sm p-8 space-y-6">

          <h1 className="text-3xl font-serif font-semibold">
            Add New Service
          </h1>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block font-medium mb-2">
              Upload Images
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) =>
                handleImagesUpload(e.target.files)
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* NAME */}
          <input
            className="w-full border rounded-xl p-3"
            placeholder="Service Name"
            value={service.name}
            onChange={(e) =>
              setService({
                ...service,
                name: e.target.value,
              })
            }
          />

          {/* SUBTITLE */}
          <input
            className="w-full border rounded-xl p-3"
            placeholder="Subtitle"
            value={service.subtitle}
            onChange={(e) =>
              setService({
                ...service,
                subtitle: e.target.value,
              })
            }
          />

          {/* DESCRIPTION */}
          <textarea
            className="w-full border rounded-xl p-3 h-32"
            placeholder="Description"
            value={service.description}
            onChange={(e) =>
              setService({
                ...service,
                description: e.target.value,
              })
            }
          />

          {/* FEATURES */}
          <div>
            <div className="flex justify-between">
              <h2 className="font-semibold">Features</h2>

              <button
                type="button"
                onClick={addFeature}
                className="text-sm text-[#B8860B]"
              >
                + Add
              </button>
            </div>

            <div className="space-y-3 mt-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className="flex-1 border rounded-xl p-2"
                    value={feature}
                    onChange={(e) =>
                      handleFeatureChange(
                        e.target.value,
                        i
                      )
                    }
                  />

                  <button
                    onClick={() => removeFeature(i)}
                    className="px-3 rounded-xl bg-red-100 text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-[#D4AF37] hover:text-black transition"
          >
            Save Service
          </button>
        </div>

        {/* PREVIEW */}
        <div className="bg-white rounded-3xl shadow-sm p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Live Preview
          </h2>

          {/* IMAGE GRID */}
          {previews.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {previews.map((img, i) => (
                <div key={i} className="relative">

                  <img
                    src={img}
                    className="h-32 w-full object-cover rounded-xl"
                  />

                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2"
                  >
                    ✕
                  </button>

                </div>
              ))}
            </div>
          )}

          <div className="space-y-4">

            <h3 className="text-3xl font-bold">
              {service.name || "Service Name"}
            </h3>

            <p className="text-[#B8860B]">
              {service.subtitle || "Subtitle"}
            </p>

            <p className="text-zinc-600">
              {service.description ||
                "Description preview..."}
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">
                Features
              </h4>

              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                {service.features
                  .filter((f) => f.trim() !== "")
                  .map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
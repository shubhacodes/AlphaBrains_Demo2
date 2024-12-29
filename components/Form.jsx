"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Confetti } from "./ui/confetti";
import { WarpBackground } from "./ui/warp-background";
import Particles from "./ui/particles";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purposeOfJoining: "",
    description: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePurposeChange = (value) => {
    setFormData({ ...formData, purposeOfJoining: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setShowConfetti(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          purposeOfJoining: "",
          description: "",
        });
        setTimeout(() => setShowConfetti(false), 5000);
        alert("Message sent successfully!");
      } else {
        alert(result.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <Particles
          className="w-full h-full"
          quantity={100}
          staticity={30}
          ease={20}
          size={0.8}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <WarpBackground
          className="max-w-4xl mx-auto border-0"
          beamsPerSide={4}
          beamSize={8}
          beamDuration={4}
          beamDelayMax={2}
          gridColor="rgba(203, 49, 78, 0.1)"
        >
          <form
            className="flex flex-col gap-y-8 bg-white/95 backdrop-blur-sm rounded-xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col gap-4">
              <p className="text-gray-700 font-semibold">Purpose of Joining</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purposeOfJoining"
                    value="Join AlphaBrains as student or tutor"
                    checked={
                      formData.purposeOfJoining ===
                      "Join AlphaBrains as student or tutor"
                    }
                    onChange={() =>
                      handlePurposeChange(
                        "Join AlphaBrains as student or tutor"
                      )
                    }
                    className="form-radio h-5 w-5 text-[#cb314e] border-gray-300 focus:ring-[#cb314e]"
                    required
                  />
                  <span>Join AlphaBrains as student or tutor</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purposeOfJoining"
                    value="Query"
                    checked={formData.purposeOfJoining === "Query"}
                    onChange={() => handlePurposeChange("Query")}
                    className="form-radio h-5 w-5 text-[#cb314e] border-gray-300 focus:ring-[#cb314e]"
                  />
                  <span>Query</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purposeOfJoining"
                    value="Other"
                    checked={formData.purposeOfJoining === "Other"}
                    onChange={() => handlePurposeChange("Other")}
                    className="form-radio h-5 w-5 text-[#cb314e] border-gray-300 focus:ring-[#cb314e]"
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <Textarea
              id="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="min-h-[200px]"
              required
            />

            <Button
              type="submit"
              className="bg-[#cb314e] hover:bg-[#b02842] text-white flex items-center gap-x-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </WarpBackground>
      </div>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Confetti
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            options={{
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Form;

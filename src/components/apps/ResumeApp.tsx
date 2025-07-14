import React from 'react';
import { Heart, Star, Award, Briefcase } from 'lucide-react';

const ResumeApp: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-10 h-10 text-pink-600 fill-current" />
        </div>
        <h1 className="text-2xl font-bold text-pink-600">Mayank Kumar Shah</h1>
        <p className="text-pink-500">Professional Lover & Heart Specialist</p>
      </div>

      <div className="space-y-6">
        {/* Personal Info */}
        <section className="bg-pink-50 rounded-xl p-4 border border-pink-200">
          <h2 className="text-lg font-bold text-pink-600 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Personal Information
          </h2>
          <div className="space-y-2 text-sm">
            <div><strong>Email:</strong> mayank@lovelycouple.heart</div>
            <div><strong>Phone:</strong> +91 LOVE-YOU-FOREVER</div>
            <div><strong>Location:</strong> In your heart 💕</div>
            <div><strong>Status:</strong> Deeply in love</div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-pink-50 rounded-xl p-4 border border-pink-200">
          <h2 className="text-lg font-bold text-pink-600 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Core Skills
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>• Loving unconditionally ⭐⭐⭐⭐⭐</div>
            <div>• Making you smile ⭐⭐⭐⭐⭐</div>
            <div>• Giving warm hugs ⭐⭐⭐⭐⭐</div>
            <div>• Listening to you ⭐⭐⭐⭐⭐</div>
            <div>• Being supportive ⭐⭐⭐⭐⭐</div>
            <div>• Creating memories ⭐⭐⭐⭐⭐</div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-pink-50 rounded-xl p-4 border border-pink-200">
          <h2 className="text-lg font-bold text-pink-600 mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Love Experience
          </h2>
          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-bold text-pink-700">Your Forever Partner</h3>
              <p className="text-pink-600">January 2024 - Present</p>
              <p className="text-pink-700">
                • Successfully made you smile every day<br/>
                • Maintained 100% loyalty and dedication<br/>
                • Developed advanced cuddle and comfort techniques<br/>
                • Specialized in surprise planning and gift-giving
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-pink-700">Secret Admirer</h3>
              <p className="text-pink-600">2023 - January 2024</p>
              <p className="text-pink-700">
                • Perfected the art of daydreaming about you<br/>
                • Gained extensive experience in butterflies-in-stomach management<br/>
                • Developed crush-handling protocols
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-pink-50 rounded-xl p-4 border border-pink-200">
          <h2 className="text-lg font-bold text-pink-600 mb-3">Education</h2>
          <div className="text-sm">
            <div>
              <h3 className="font-bold text-pink-700">University of Love</h3>
              <p className="text-pink-600">Bachelor's in Romantic Sciences - 2024</p>
              <p className="text-pink-700">Major: Making You Happy</p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="bg-pink-50 rounded-xl p-4 border border-pink-200">
          <h2 className="text-lg font-bold text-pink-600 mb-3">References</h2>
          <div className="text-sm text-pink-700">
            <p><strong>Your Heart:</strong> "He's the best thing that ever happened to me!"</p>
            <p><strong>Your Smile:</strong> "He brings me out every day!"</p>
            <p><strong>Your Dreams:</strong> "He's always featured in the best ones!"</p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-pink-600 font-medium">
            Available for unlimited hugs, kisses, and lifetime commitment! 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
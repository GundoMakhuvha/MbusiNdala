import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Clock, AlertCircle } from "lucide-react";

interface ServicesPageProps {
  onSelectPackage: (packageName: string) => void;
}

export function ServicesPage({ onSelectPackage }: ServicesPageProps) {
  const packages = [
    {
      name: "Forever in Our Hearts Package",
      coverage: "Member + 9 Dependents (up to age 75)",
      services: [
        "3 Tier coffin",
        "Hearse + 2 family cars",
        "Burial service",
        "Death registration",
        "Tent, 40 chairs, 2 tables, 1 mobile toilet",
        "Grave booking (grave fee excluded)",
        "R1000 cash payout",
      ],
      premiums: [
        { ageRange: "18–65", amount: "R288" },
        { ageRange: "65–70", amount: "R384" },
        { ageRange: "71–75", amount: "R464" },
      ],
      counselling: "Free 2 × one-hour counselling sessions for bereaved family members",
    },
    {
      name: "Senior Citizens Package",
      coverage: "Senior citizen + spouse",
      services: [
        "Casket",
        "Hearse + 2 family cars",
        "Burial service",
        "Death registration",
        "Tent, 40 chairs, 2 tables, 1 mobile toilet",
        "Grave booking (grave fee excluded)",
        "R1000 cash payout",
      ],
      premiums: [
        { ageRange: "65–70", amount: "R319" },
        { ageRange: "71–75", amount: "R497" },
      ],
      counselling: "Free 2 × one-hour counselling sessions for bereaved family members",
    },
    {
      name: "Family Package",
      coverage: "Member + 5 Dependents (up to age 75)",
      services: [
        "Casket",
        "Hearse + 2 family cars",
        "Burial service",
        "Death registration",
        "Tent, 40 chairs, 2 tables, 1 mobile toilet",
        "Grave booking (grave fee excluded)",
        "R1000 cash payout",
      ],
      premiums: [
        { ageRange: "18–65", amount: "R260" },
        { ageRange: "65–70", amount: "R343" },
        { ageRange: "71–75", amount: "R416" },
      ],
      counselling: "Free 2 × one-hour counselling sessions for bereaved family members",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-50 dark:bg-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-black dark:text-white text-5xl mb-6 font-serif">Our Funeral Packages</h1>
          <p className="text-gray-600 dark:text-white/80 text-lg max-w-3xl mx-auto font-light">
            We offer comprehensive funeral packages designed to provide peace of mind and financial security 
            for you and your loved ones during difficult times.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className="bg-white dark:bg-black/40 border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white/40 transition-all duration-300 flex flex-col group shadow-md"
              >
                <CardHeader className="border-b border-gray-100 dark:border-white/10 pb-6 bg-gray-50/50 dark:bg-transparent">
                  <CardTitle className="text-black dark:text-white text-2xl text-center mb-4 font-serif">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-center">
                    <p className="text-gray-900 dark:text-white/90 mb-2">
                      <span className="font-semibold">Coverage:</span>
                    </p>
                    <p className="text-gray-600 dark:text-white/70">{pkg.coverage}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 flex-1 flex flex-col">
                  {/* Services Included */}
                  <div className="mb-6">
                    <h3 className="text-black dark:text-white mb-4 flex items-center gap-2 font-medium">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      Included Services
                    </h3>
                    <ul className="space-y-2">
                      {pkg.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-white/70">
                          <Check className="w-4 h-4 text-gray-400 dark:text-white/50 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Premium Table */}
                  <div className="mb-6">
                    <h3 className="text-black dark:text-white mb-4 font-medium">Monthly Premium</h3>
                    <div className="bg-gray-50 dark:bg-black/30 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
                      <table className="w-full">
                        <thead className="bg-gray-100 dark:bg-white/5 text-xs uppercase tracking-wider">
                          <tr>
                            <th className="text-left py-3 px-4 text-gray-500 dark:text-white/80">Age Range</th>
                            <th className="text-right py-3 px-4 text-gray-500 dark:text-white/80">Premium</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {pkg.premiums.map((premium, idx) => (
                            <tr key={idx} className="border-t border-gray-100 dark:border-white/10">
                              <td className="py-3 px-4 text-gray-600 dark:text-white/70">{premium.ageRange}</td>
                              <td className="py-3 px-4 text-right text-black dark:text-white font-semibold">
                                {premium.amount}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Counselling Benefit */}
                  <div className="mb-8 pt-4 border-t border-gray-100 dark:border-white/10">
                    <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4">
                      <p className="text-black dark:text-white/90 mb-2 font-semibold text-sm italic">Extra Benefit:</p>
                      <p className="text-gray-600 dark:text-white/70 text-xs italic">{pkg.counselling}</p>
                    </div>
                  </div>

                  {/* Selection Button */}
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-black/80 dark:hover:bg-gray-100 transition-all font-medium mt-auto"
                  >
                    Select Package
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white dark:bg-black/40 border-2 border-gray-200 dark:border-white/20 rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-black dark:text-white text-2xl mb-4 font-serif">Terms & Conditions</h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gray-400 dark:text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-black dark:text-white mb-2 font-medium">Waiting Periods</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-black dark:text-white/50 font-bold">•</span>
                      <span><span className="text-black dark:text-white/90 font-semibold">6-month waiting period</span> for natural death</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black dark:text-white/50 font-bold">•</span>
                      <span><span className="text-black dark:text-white/90 font-semibold">No waiting period</span> for accidental death</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <p className="text-gray-500 dark:text-white/80 text-center text-sm">
                  Premiums are subject to annual review. Coverage is subject to full policy terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

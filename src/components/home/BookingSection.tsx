"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Calendar as CalendarIcon, Clock, Loader2 } from "lucide-react";
import { createAppointment } from "@/actions/booking";

export function BookingSection() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [bookingId, setBookingId] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const [formData, setFormData] = React.useState({
    serviceId: "Cosmetic Dentistry", // Default
    date: "",
    time: "",
    patientName: "",
    phone: "",
    email: "",
    patientType: "NEW",
    notes: "",
  });

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => {
    setError(null);
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const res = await createAppointment(formData);
      
      if (res.success && res.bookingId) {
        setBookingId(res.bookingId);
        setStep(4);
        
        // Prepare WhatsApp message
        const message = `Hello Unity Dental Clinics,
I would like to book an appointment.
Name: ${formData.patientName}
Phone: ${formData.phone}
Treatment: ${formData.serviceId}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Notes: ${formData.notes || 'None'}
Thank you.`;

        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/918734934747?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(waUrl, '_blank');

        // Wait briefly to show the success message
        setTimeout(() => {
          setStep(1); 
        }, 5000);

      } else {
        setError(res.error || "Failed to create appointment.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-24 bg-background text-foreground relative scroll-mt-32 border-t border-border/10">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0047B3_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-label font-sans font-bold tracking-[0.2em] text-[#10B981] mb-4 block uppercase">
            Appointments
          </span>
          <h2 className="text-h2 md:text-h1 font-heading font-light tracking-tight text-primary">
            Request a Consultation
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="bg-white border border-border/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex bg-[#FDFBF7] border-b border-border/40">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex-1 py-5 text-center relative">
                    <span className={`text-label font-sans font-semibold tracking-widest uppercase ${step >= s ? 'text-primary' : 'text-muted-foreground/50'}`}>
                      {s === 1 ? 'Service & Time' : s === 2 ? 'Details' : 'Review'}
                    </span>
                    {step === s && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#10B981]" />}
                  </div>
                ))}
              </div>

              <div className="p-8 lg:p-12">
                {step === 1 && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="space-y-4">
                      <Label className="text-ui font-sans font-semibold tracking-wider text-muted-foreground uppercase">Select Service</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['Cosmetic Dentistry', 'Pediatric Care', 'Sedation Dentistry'].map((service) => (
                          <div 
                            key={service}
                            onClick={() => setFormData({...formData, serviceId: service})}
                            className={`p-5 rounded-xl border cursor-pointer transition-all text-center flex items-center justify-center h-full ${formData.serviceId === service ? 'border-[#10B981] bg-[#10B981]/5 text-[#10B981]' : 'border-border/60 hover:border-primary/30 text-secondary'}`}
                          >
                            <span className="font-sans font-medium text-ui block">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <Label className="text-ui font-sans font-semibold tracking-wider text-muted-foreground uppercase">Select Date</Label>
                        <Input 
                          type="date" 
                          className="h-14 font-sans text-body border-border/60 focus:border-primary bg-white text-foreground" 
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-4">
                        <Label className="text-ui font-sans font-semibold tracking-wider text-muted-foreground uppercase">Select Time</Label>
                         <Input 
                          type="time" 
                          className="h-14 font-sans text-body border-border/60 focus:border-primary bg-white text-foreground" 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          min="10:00" max="20:30"
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <Button onClick={handleNext} disabled={!formData.date || !formData.time} className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-sans font-bold">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="font-sans font-medium text-ui text-secondary">Full Name *</Label>
                        <Input 
                          required 
                          className="h-14 font-sans text-body border-border/60 focus:border-primary bg-white text-foreground"
                          value={formData.patientName}
                          onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                          placeholder="e.g., John Doe"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-sans font-medium text-ui text-secondary">Phone Number *</Label>
                        <Input 
                          required 
                          type="tel"
                          className="h-14 font-sans text-body border-border/60 focus:border-primary bg-white text-foreground"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="font-sans font-medium text-ui text-secondary">Email (Optional)</Label>
                      <Input 
                        type="email"
                        className="h-14 font-sans text-body border-border/60 focus:border-primary bg-white text-foreground"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="font-sans font-medium text-ui text-secondary">Reason for visit / Notes</Label>
                      <Input 
                        className="h-14 font-sans text-body border-border/60 focus:border-primary bg-white text-foreground"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        placeholder="Any specific concerns?"
                      />
                    </div>

                    <div className="pt-8 flex justify-between">
                      <Button variant="outline" onClick={handleBack} className="rounded-full px-8 h-12 font-sans font-medium text-secondary">
                        Back
                      </Button>
                      <Button onClick={handleNext} disabled={!formData.patientName || !formData.phone} className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-sans font-bold">
                        Review <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="bg-[#FDFBF7] border border-border/40 rounded-xl p-8 space-y-5">
                      <div className="flex items-start gap-4">
                        <CalendarIcon className="h-5 w-5 text-[#10B981] mt-0.5" />
                        <div>
                          <p className="text-ui font-sans font-medium text-muted-foreground uppercase tracking-wider">Date</p>
                          <p className="font-sans font-semibold text-primary">{formData.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-[#10B981] mt-0.5" />
                        <div>
                          <p className="text-ui font-sans font-medium text-muted-foreground uppercase tracking-wider">Time</p>
                          <p className="font-sans font-semibold text-primary">{formData.time}</p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-border/40 mt-6">
                        <p className="text-ui font-sans font-medium text-muted-foreground uppercase tracking-wider mb-1">Patient Details</p>
                        <p className="font-sans font-semibold text-primary text-body">{formData.patientName} ({formData.phone})</p>
                        <p className="font-sans text-ui text-secondary mt-1">Service: {formData.serviceId}</p>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-ui font-sans font-medium border border-red-100">
                        {error}
                      </div>
                    )}

                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={handleBack} disabled={isSubmitting} className="rounded-full px-8 h-12 font-sans font-medium text-secondary">
                        Back
                      </Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting} className="rounded-full px-8 h-12 bg-[#10B981] hover:bg-[#10B981]/90 text-white font-sans font-bold shadow-sm">
                        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Confirm Appointment"}
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="mx-auto w-20 h-20 bg-green-50 text-[#10B981] rounded-full flex items-center justify-center mb-8 border border-[#10B981]/20 shadow-sm">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-h2 font-heading font-light text-primary mb-4">Appointment requested!</h3>
                    <p className="text-secondary mb-8 text-lead font-sans font-light flex items-center justify-center">
                      We will contact you shortly to confirm your slot.
                    </p>
                    <p className="text-ui font-sans text-muted-foreground max-w-sm mx-auto">
                      Booking ID: <span className="font-medium text-primary">{bookingId}</span>
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  );
}

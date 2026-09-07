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
        
        // Build WhatsApp Message
        let msg = `Hello Sri Dental Clinic,\n\nI would like to request/confirm my appointment.\n\nBooking ID: ${res.bookingId}\n\nPatient Name: ${formData.patientName}\nPhone: ${formData.phone}`;
        if (formData.email) msg += `\nEmail: ${formData.email}`;
        
        msg += `\n\nService: ${formData.serviceId}\nDate: ${formData.date}\nTime: ${formData.time}\n\nPatient Type: ${formData.patientType}`;
        if (formData.notes) msg += `\nReason for Visit: ${formData.notes}`;
        
        msg += `\n\nThank you.`;
        
        const encodedMsg = encodeURIComponent(msg);
        const whatsappUrl = `https://wa.me/9866496237?text=${encodedMsg}`;

        // Wait briefly to show the success message, then redirect directly to WhatsApp
        setTimeout(() => {
          window.location.href = whatsappUrl;
        }, 1500);

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
    <section id="book" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/20 to-accent/20" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-accent mb-4 block">
            Appointments
          </span>
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-white sm:text-4xl">
            Request a Consultation
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="bg-background text-foreground border-none shadow-2xl rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex bg-secondary/50 border-b border-border">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex-1 py-4 text-center relative">
                    <span className={`text-xs font-semibold tracking-widest uppercase ${step >= s ? 'text-primary' : 'text-muted-foreground'}`}>
                      {s === 1 ? 'Service & Time' : s === 2 ? 'Details' : 'Review'}
                    </span>
                    {step === s && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-accent" />}
                  </div>
                ))}
              </div>

              <div className="p-8 lg:p-12">
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="space-y-4">
                      <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Select Service</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['Cosmetic Dentistry', 'Pediatric Care', 'Sedation Dentistry'].map((service) => (
                          <div 
                            key={service}
                            onClick={() => setFormData({...formData, serviceId: service})}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center flex items-center justify-center h-full ${formData.serviceId === service ? 'border-accent bg-accent/5 text-primary' : 'border-border hover:border-accent/50'}`}
                          >
                            <span className="font-medium text-sm block">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Select Date</Label>
                        <Input 
                          type="date" 
                          className="h-12" 
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-4">
                        <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Select Time</Label>
                         <Input 
                          type="time" 
                          className="h-12" 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          min="10:00" max="20:30"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button onClick={handleNext} disabled={!formData.date || !formData.time} className="rounded-full px-8">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input 
                          required 
                          className="h-12"
                          value={formData.patientName}
                          onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number *</Label>
                        <Input 
                          required 
                          type="tel"
                          className="h-12"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Email (Optional)</Label>
                      <Input 
                        type="email"
                        className="h-12"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Reason for visit / Notes</Label>
                      <Input 
                        className="h-12"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      />
                    </div>

                    <div className="pt-6 flex justify-between">
                      <Button variant="outline" onClick={handleBack} className="rounded-full px-8">
                        Back
                      </Button>
                      <Button onClick={handleNext} disabled={!formData.patientName || !formData.phone} className="rounded-full px-8">
                        Review <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="bg-secondary/30 rounded-xl p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <CalendarIcon className="h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Date</p>
                          <p className="font-semibold text-primary">{formData.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Time</p>
                          <p className="font-semibold text-primary">{formData.time}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-sm font-medium text-muted-foreground">Patient Details</p>
                        <p className="font-semibold text-primary">{formData.patientName} ({formData.phone})</p>
                        <p className="text-sm text-primary mt-1">Service: {formData.serviceId}</p>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                        {error}
                      </div>
                    )}

                    <div className="pt-2 flex justify-between">
                      <Button variant="outline" onClick={handleBack} disabled={isSubmitting} className="rounded-full px-8">
                        Back
                      </Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting} className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Confirm Appointment"}
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                    <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-sm">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-heading font-semibold text-primary mb-4">Appointment request received!</h3>
                    <p className="text-muted-foreground mb-8 text-lg flex items-center justify-center">
                      <Loader2 className="mr-3 h-5 w-5 animate-spin text-accent" />
                      Opening WhatsApp to send details...
                    </p>
                    <p className="text-sm text-muted-foreground/60 max-w-sm mx-auto">
                      Please press &quot;Send&quot; in WhatsApp to notify the clinic. Your booking ID is {bookingId}.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

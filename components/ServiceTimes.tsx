import type { ServiceTime } from '@/types'

interface ServiceTimesProps {
  serviceTimes: ServiceTime[]
  address?: string
  mapEmbedUrl?: string
}

export default function ServiceTimes({ serviceTimes, address, mapEmbedUrl }: ServiceTimesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Times */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">
              Join Us
            </p>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-8">Service Times</h2>

            {serviceTimes.length > 0 ? (
              <div className="space-y-4">
                {serviceTimes.map((st) => (
                  <div
                    key={st._key}
                    className="flex items-start gap-4 p-4 border border-gray-100 bg-gray-50"
                  >
                    <div className="w-1 h-full bg-accent flex-shrink-0 self-stretch" />
                    <div>
                      <p className="font-semibold text-primary">{st.serviceType}</p>
                      <p className="text-gray-600 text-sm mt-0.5">
                        {st.day} · {st.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { serviceType: 'Sunday Service', day: 'Sunday', time: 'TBD' },
                  { serviceType: 'Bible Study', day: 'Wednesday', time: 'TBD' },
                  { serviceType: 'Prayer Meeting', day: 'Friday', time: 'TBD' },
                ].map((st) => (
                  <div key={st.serviceType} className="flex items-start gap-4 p-4 border border-gray-100 bg-gray-50">
                    <div className="w-1 self-stretch bg-accent/30 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">{st.serviceType}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{st.day} · {st.time}</p>
                    </div>
                  </div>
                ))}
                <p className="text-sm text-gray-400 italic">Service times coming soon.</p>
              </div>
            )}

            {address && (
              <div className="mt-8 p-4 bg-primary/5 border-l-4 border-accent">
                <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">
                  Address
                </p>
                <address className="not-italic text-gray-700 text-sm whitespace-pre-line">
                  {address}
                </address>
              </div>
            )}
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">
              Find Us
            </p>
            <h2 className="text-3xl font-bold text-primary">Location</h2>
            <div className="flex-1 min-h-64 bg-gray-100 overflow-hidden">
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '300px', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                  Map coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

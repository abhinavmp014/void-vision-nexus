import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const MyIMadeSection = () => {
  return (
    <section id="my-i-made" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
            My I Made
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D experiences crafted with passion and precision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          <Card className="w-full h-[500px] bg-card/90 overflow-hidden relative border-border">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="hsl(var(--neon-blue))" />
            

            <div className="flex h-full flex-col md:flex-row">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                  Interactive 3D
                </h3>
                



                
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full" />
                
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>);

};

export default MyIMadeSection;
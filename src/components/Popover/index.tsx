import {
  FloatingPortal,
  Placement,
  arrow,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";
import React, { ElementType, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  renderProp: React.ReactNode;
  className?: string;
  as?: ElementType;
  initialOpen?: boolean;
  placement?: Placement;
}
const Popover = ({
  children,
  renderProp,
  className,
  as: Element = "div",
  initialOpen,
  placement,
}: Props) => {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(initialOpen || false);
  const { x, y, reference, floating, middlewareData, strategy } = useFloating({
    middleware: [offset(6), shift(), arrow({ element: arrowRef })],
    placement: placement || "right",
  });
  const hidePopover = () => setOpen(false);
  const openPopover = () => setOpen(true);

  return (
    <Element
      className={className}
      onMouseLeave={hidePopover}
      onMouseEnter={openPopover}
      ref={reference}
    >
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <motion.div
              className=""
              ref={floating}
              style={{
                position: strategy,
                top: y || 0,
                left: x || 0,
                width: "max-content",
                transformOrigin: `${middlewareData.arrow?.x}px left`,
              }}
              initial={{
                opacity: 0,
                transform: "scale(0)",
              }}
              animate={{
                opacity: 1,
                transform: "scale(1)",
              }}
              exit={{
                opacity: 0,
                transform: "scale(0)",
              }}
              transition={{ duration: 0.3 }}
            >
              <span
                ref={arrowRef}
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y,
                }}
                className="absolute z-10 -translate-y-[95%] border-x-transparent border-b-white border-t-transparent"
              ></span>
              {renderProp}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  );
};

export default Popover;

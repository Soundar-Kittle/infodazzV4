import { Eye, EyeOff } from "lucide-react";
import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useCallback,
} from "react";
// import "./CustomInput.css";

const CustomInput = forwardRef(
  (
    {
      id,
      name,
      type = "text",
      label,
      placeholder = "",
      value: propValue,
      defaultValue = "",
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      readOnly = false,
      required = false,
      errors,
      helperText,
      autoComplete = "off",
      autoFocus = false,

      // Variant & size options: 'outlined' | 'filled' | 'standard'
      variant = "outlined",
      // Size options: 'small' | 'medium' | 'large'
      size = "large",

      enablePasswordToggle = false,

      // For textarea support (when type === "textarea")
      rows = 3,

      containerProps = {},
      labelProps = {},

      className = "",
      containerClassName = "",
      inputClassName = "",
      labelClassName = "",
      errorClassName = "",
      helperTextClassName = "",
      iconLeftClassName = "",
      iconRightClassName = "",
      style = {},
      containerStyle = {},
      inputStyle = {},
      labelStyle = {},
      errorStyle = {},
      helperTextStyle = {},

      iconLeft,
      iconRight,

      // Label placement options: "default" | "floating" | "hidden"
      labelPlacement = "default",

      renderLabel,
      renderInput,
      renderError,
      renderHelperText,

      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      labelComponent = null,
      component = null,
      ...restProps
    },
    ref
  ) => {
    // Controlled vs uncontrolled handling
    const isControlled = propValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? propValue : internalValue;

    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const internalRef = useRef(null);

    useEffect(() => {
      const valueToSet =
        propValue === null || propValue === undefined ? "" : propValue;
      setInternalValue(valueToSet);
    }, [propValue]);

    // Add the same nested error extraction logic from MultiSelect
    const getNestedError = (path, errors) => {
      if (!errors || !path) return null;
      const segments = path.split(/[\[\].]+/).filter(Boolean);
      let currentError = errors;
      for (const segment of segments) {
        if (/^\d+$/.test(segment)) {
          currentError = currentError?.[parseInt(segment)];
        } else {
          currentError = currentError?.[segment];
        }
        if (currentError?.message || currentError?.type) {
          return currentError;
        }
      }
      return currentError;
    };

    const error = getNestedError(name, errors);
    const errorMessage = error?.message || String(error || "");

    const handleChange = useCallback(
      (e) => {
        if (!isControlled) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [onChange, isControlled]
    );

    const handleFocus = useCallback(
      (e) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    const shouldFloatLabel =
      labelPlacement === "floating" &&
      (isFocused || currentValue || placeholder);

    const hasError = !!errorMessage;

    const errorId = hasError ? `${id}-error` : undefined;
    const helperTextId = helperText ? `${id}-helper` : undefined;
    const ariaDescribedByIds = [ariaDescribedBy, errorId, helperTextId]
      .filter(Boolean)
      .join(" ");

    const combinedRef = (node) => {
      internalRef.current = node;
      if (ref) {
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    };

    const renderLabelElement = () => {
      if (!label || labelPlacement === "hidden") return null;
      const mergedLabelStyle = {
        ...labelStyle,
        ...(hasError
          ? { color: "var(--bs-form-invalid-border-color, #dc3545)" }
          : {}),
      };

      const labelContent = (
        <div className="flex items-center gap-2">
          <div className="text-sm">
            {label}
            {required && (
              <span style={{ color: "red", marginLeft: "2px" }}>*</span>
            )}
          </div>
          {labelComponent && labelComponent}
        </div>
      );

      if (renderLabel) return renderLabel(label);

      if (labelPlacement === "floating") {
        return (
          <label
            htmlFor={id}
            className={`custom-input-label-floating floated ${labelClassName} ${
              errorMessage ? "text-danger" : ""
            }`}
            style={mergedLabelStyle}
            {...labelProps}
          >
            {labelContent}
          </label>
        );
      }

      return (
        <label
          htmlFor={id}
          className={`custom-input-label ${labelClassName} ${
            errorMessage ? "text-danger" : ""
          }`}
          style={mergedLabelStyle}
          {...labelProps}
        >
          {labelContent}
        </label>
      );
    };

    const renderNativeInput = () => {
      let inputType = type;
      if (type === "password" && enablePasswordToggle) {
        inputType = showPassword ? "text" : "password";
      }

      // Safe value handling to prevent "uncontrolled to controlled" React warnings
      const safeValue =
        currentValue === null || currentValue === undefined ? "" : currentValue;

      if (type === "textarea") {
        return (
          <textarea
            id={id}
            ref={combinedRef}
            name={name}
            placeholder={placeholder}
            rows={rows}
            value={safeValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedByIds}
            aria-invalid={hasError}
            aria-required={required}
            className={[
              "custom-input-element",
              inputClassName,
              iconLeft ? "with-icon-left" : "",
              iconRight ? "with-icon-right" : "",
              variant,
              size,
            ].join(" ")}
            style={inputStyle}
            {...restProps}
          />
        );
      }
      return (
        <input
          id={id}
          ref={combinedRef}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={safeValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedByIds}
          aria-invalid={hasError}
          aria-required={required}
          className={[
            "custom-input-element",
            inputClassName,
            iconLeft ? "with-icon-left" : "",
            iconRight || (type === "password" && enablePasswordToggle)
              ? "with-icon-right"
              : "",
            variant,
            size,
          ].join(" ")}
          style={inputStyle}
          {...restProps}
        />
      );
    };

    const renderInputElement = () => {
      if (renderInput) {
        return renderInput({
          id,
          ref: internalRef,
          name,
          type,
          value: currentValue,
          placeholder,
          disabled,
          readOnly,
          required,
          autoComplete,
          autoFocus,
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          "aria-describedby": ariaDescribedByIds,
          errors: errorMessage,
          size,
          variant,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
        });
      }
      return (
        <div className="custom-input-wrapper">
          {iconLeft && (
            <span className={`custom-input-icon-left ${iconLeftClassName}`}>
              {iconLeft}
            </span>
          )}
          {renderNativeInput()}
          {type === "password" && enablePasswordToggle && (
            <span
              className={`custom-input-icon-right ${iconRightClassName}`}
              style={{ cursor: "pointer" }}
              onClick={handleTogglePassword}
            >
              {/* {showPassword ? "🙈" : "👁️"} */}
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          )}
          {type !== "password" && iconRight && (
            <span className={`custom-input-icon-right ${iconRightClassName}`}>
              {iconRight}
            </span>
          )}
        </div>
      );
    };

    const renderErrorContent = () => {
      if (!errorMessage) return null;

      if (renderError) return renderError(errorMessage);

      return (
        <div
          className="text-red-500 text-end text-sm"
          style={{ margin: 0, padding: 0, marginBottom: "8px" }}
        >
          {errorMessage}
        </div>
      );
    };

    const renderHelperTextContent = () => {
      if (!helperText) return null;
      const helperElement = (
        <div
          id={helperTextId}
          className={`custom-input-helper-text ${helperTextClassName}`}
          style={helperTextStyle}
        >
          {helperText}
        </div>
      );
      return renderHelperText ? renderHelperText(helperElement) : helperElement;
    };

    const containerClasses = [
      "custom-input",
      disabled ? "disabled" : "",
      hasError ? "has-error" : "",
      labelPlacement === "floating" ? "" : "",
      variant,
      size,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClasses} style={style} {...containerProps}>
        {labelPlacement === "default" && renderLabelElement()}
        <div
          className={[
            "custom-input-container",
            hasError ? "border-danger" : "",
            containerClassName,
          ].join(" ")}
          style={containerStyle}
        >
          {labelPlacement === "floating" && renderLabelElement()}
          {renderInputElement()}
        </div>
        {component && component}
        {renderHelperTextContent()}
        {renderErrorContent()}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;

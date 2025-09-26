import React, { useState, useEffect, useRef, forwardRef } from "react";
import "./MultiSelect.css";

const MultiSelect = forwardRef(
  (
    {
      options = [],
      label,
      name,
      errors,
      id = "multi-select",
      placeholder = "Select options...",
      searchPlaceholder = "Search...",
      noOptionsMessage = "No options available",
      noMatchesMessage = "No matches found",
      onChange,
      disabled = false,
      defaultValue = [],
      value,
      isMulti = true,

      className = "",
      containerClassName = "form-select p-0 m-0",
      tagClassName = "",
      dropdownClassName = "",
      optionClassName = "",
      inputClassName = "",
      clearButtonClassName = "",
      style = {},
      containerStyle = {},
      dropdownStyle = {},
      tagStyle = {},

      labelClassName = "",
      labelStyle = {},

      renderOption,
      renderTag,
      renderLabel,
      renderClearButton,
      renderNoOptions,

      // Behavior props
      maxTags,
      closeOnSelect = true,
      allowDuplicates = false,
      sortSelected = false,
      filterOption,

      onFocus,
      onBlur,
      onDropdownOpen,
      onDropdownClose,
      onTagRemove,

      removeIcon,
      removeIconClassName = "",
      removeIconStyle = {},
      clearAllIcon,
      clearAllIconClassName = "",
      clearAllIconStyle = {},

      required = false,
      labelPlacement = "floating",

      showClearAll = false,

      ...restProps
    },
    ref
  ) => {
    const internalContainerRef = useRef(null);
    const containerRef = ref || internalContainerRef;

    const [selectedValues, setSelectedValues] = useState(() => {
      if (value !== undefined) {
        if (!isMulti) {
          return [
            value === null || value === undefined || value === "" ? "" : value,
          ];
        }
        return Array.isArray(value) ? value : [];
      }
      return defaultValue.length > 0
        ? !isMulti
          ? [defaultValue[0]]
          : defaultValue
        : !isMulti
          ? [""]
          : [];
    });
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [activeDescendant, setActiveDescendant] = useState("");

    const inputRef = useRef(null);
    const listboxRef = useRef(null);
    const optionsRef = useRef([]);
    const initializeDefaultRef = useRef(false);

    const internalRef = useRef(null);

    // Helper to get nested error messages (if using nested forms or arrays)
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

    const handleSearch = (e) => {
      if (disabled) return;
      setSearchTerm(e.target.value);
      setIsOpen(true);
    };

    const defaultFilterOption = (option, term) =>
      option.label.toLowerCase().includes(term.toLowerCase());

    // Filter out any selected values (only if isMulti) + apply search filtering
    const filteredOptions = options
      .filter((option) =>
        isMulti ? !selectedValues.includes(option.value) : true
      )
      .filter((option) =>
        filterOption
          ? filterOption(option, searchTerm)
          : defaultFilterOption(option, searchTerm)
      );

    // Keep optionsRef trimmed to the number of filtered options
    useEffect(() => {
      optionsRef.current = optionsRef.current.slice(0, filteredOptions.length);
    }, [filteredOptions]);

    // Sync changes from "value" prop
    useEffect(() => {
      if (!isMulti && (value === "" || value === null || value === undefined)) {
        setSelectedValues([""]);
      } else if (
        isMulti &&
        (value === undefined || (Array.isArray(value) && value.length === 0))
      ) {
        setSelectedValues([]);
      } else if (value !== undefined) {
        if (!isMulti) {
          setSelectedValues([value]);
        } else {
          setSelectedValues(Array.isArray(value) ? value : []);
        }
      }
      // Reset search & close dropdown
      setSearchTerm("");
      setIsOpen(false);
    }, [value, isMulti]);

    // Initialize defaultValue if "value" prop was never provided
    useEffect(() => {
      if (
        !initializeDefaultRef.current &&
        defaultValue.length > 0 &&
        value === undefined
      ) {
        const initialValue = !isMulti ? [defaultValue[0]] : defaultValue;
        setSelectedValues(initialValue);
        initializeDefaultRef.current = true;
      }
    }, [defaultValue, value, isMulti]);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          internalRef.current &&
          !internalRef.current.contains(event.target)
        ) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }, []);

    const getPlaceholderText = () => {
      if (isMulti) {
        return selectedValues.length === 0 ? placeholder : "";
      }
      return selectedValues[0] === "" ? placeholder : "";
    };

    const handleSelectOption = (selectedValue) => {
      if (disabled) return;

      let newSelectedValues;
      if (!isMulti) {
        newSelectedValues = [selectedValue === "" ? "" : selectedValue];
      } else {
        if (!allowDuplicates && selectedValues.includes(selectedValue)) {
          return;
        }
        if (maxTags && selectedValues.length >= maxTags) {
          return;
        }
        newSelectedValues = [...selectedValues, selectedValue];

        if (sortSelected) {
          newSelectedValues.sort((a, b) => {
            const optA = options.find((opt) => opt.value === a);
            const optB = options.find((opt) => opt.value === b);
            return optA.label.localeCompare(optB.label);
          });
        }
      }

      onChange?.(isMulti ? newSelectedValues : newSelectedValues[0]);
      if (value === undefined) {
        setSelectedValues(newSelectedValues);
      }
      if (closeOnSelect || (!isMulti && newSelectedValues[0] !== "")) {
        setIsOpen(false);
      }
      setSearchTerm("");
    };

    const handleRemoveOption = (valueToRemove) => {
      if (disabled) return;
      let newSelectedValues = selectedValues.filter((v) => v !== valueToRemove);
      if (!isMulti && newSelectedValues.length === 0) {
        newSelectedValues = [""];
      }
      onChange?.(isMulti ? newSelectedValues : newSelectedValues[0]);
      if (value === undefined) {
        setSelectedValues(newSelectedValues);
      }
      onTagRemove?.(valueToRemove);
    };

    const handleClearAll = () => {
      if (disabled) return;
      onChange?.(isMulti ? [] : "");
      if (value === undefined) {
        setSelectedValues(!isMulti ? [""] : []);
      }
    };

    // Focus the search field whenever the dropdown is opened
    useEffect(() => {
      if (isOpen) {
        setHighlightedIndex(-1);
        setActiveDescendant("");
        onDropdownOpen?.();
        inputRef.current?.focus();
      } else {
        onDropdownClose?.();
      }
    }, [isOpen, onDropdownClose, onDropdownOpen]);

    // Additional outside-click logic with pointerdown in capture mode
    useEffect(() => {
      const handleDocumentPointerDown = (event) => {
        if (
          internalRef.current &&
          !internalRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleDocumentPointerDown, true);
      return () => {
        document.removeEventListener(
          "pointerdown",
          handleDocumentPointerDown,
          true
        );
      };
    }, []);

    // Close dropdown when focusing away from the entire component
    useEffect(() => {
      const node = internalRef.current;
      if (!node) return;

      const handleFocusOut = (event) => {
        if (!node.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      };

      node.addEventListener("focusout", handleFocusOut);
      return () => node.removeEventListener("focusout", handleFocusOut);
    }, []);

    // Scroll highlighted item into view
    useEffect(() => {
      if (
        highlightedIndex >= 0 &&
        listboxRef.current &&
        optionsRef.current[highlightedIndex]
      ) {
        const option = optionsRef.current[highlightedIndex];
        const listbox = listboxRef.current;

        const optionTop = option.offsetTop;
        const optionBottom = optionTop + option.offsetHeight;
        const listboxTop = listbox.scrollTop;
        const listboxBottom = listboxTop + listbox.offsetHeight;

        if (optionTop < listboxTop) {
          listbox.scrollTop = optionTop;
        } else if (optionBottom > listboxBottom) {
          listbox.scrollTop = optionBottom - listbox.offsetHeight;
        }
      }
    }, [highlightedIndex, filteredOptions]);

    const handleKeyDown = (e) => {
      if (disabled) return;

      if (!isOpen) {
        // If dropdown is closed, open it on ArrowDown / Enter / Space
        if (["ArrowDown", "Enter", " "].includes(e.key)) {
          e.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      // If dropdown is open, handle arrow keys, Enter, etc.
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelectOption(filteredOptions[highlightedIndex].value);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          inputRef.current?.blur();
          break;
        case "Tab":
          // Just close the dropdown on Tab for simplicity
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    // Update aria-activedescendant for accessibility
    useEffect(() => {
      if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
        setActiveDescendant(
          `${id}-option-${filteredOptions[highlightedIndex].value}`
        );
      } else {
        setActiveDescendant("");
      }
    }, [highlightedIndex, filteredOptions, id]);

    const labelContent = (
      <>
        {label}
        {required && <span style={{ color: "red", marginLeft: "2px" }}>*</span>}
      </>
    );

    // Renders each selected tag in multi-select mode
    const renderDefaultTag = (option, onRemove) => {
      if (!isMulti && option.value === "") return null;
      return (
        <span
          key={option.value}
          className={`multi-select-tag ${tagClassName}`}
          style={tagStyle}
        >
          {option.icon && (
            <span className="multi-select-tag-icon">{option.icon}</span>
          )}
          {option.label}
          {!disabled && isMulti && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className={`multi-select-tag-remove ${clearButtonClassName}`}
              aria-label={`Remove ${option.label}`}
            >
              {removeIcon ? (
                <span
                  className={`multi-select-tag-remove-icon ${removeIconClassName}`}
                  style={removeIconStyle}
                >
                  {removeIcon}
                </span>
              ) : (
                <svg
                  className={`multi-select-tag-remove-icon ${removeIconClassName}`}
                  style={removeIconStyle}
                  viewBox="0 0 20 20"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              )}
            </button>
          )}
        </span>
      );
    };

    // Renders each option in the dropdown
    const renderDefaultOption = (option, isHighlighted, index) => {
      const isSelected = selectedValues.includes(option.value);
      return (
        <div
          key={option.value}
          id={`${id}-option-${option.value}`}
          role="option"
          aria-selected={isHighlighted}
          tabIndex={isHighlighted ? 0 : -1}
          className={`multi-select-option ${
            isHighlighted ? "highlighted" : ""
          } ${isSelected ? "selected" : ""} ${optionClassName}`}
          onClick={() => handleSelectOption(option.value)}
          onMouseEnter={() =>
            setHighlightedIndex(filteredOptions.indexOf(option))
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSelectOption(option.value);
            }
          }}
          ref={(el) => (optionsRef.current[index] = el)}
        >
          {option.icon && (
            <span className="multi-select-tag-icon">{option.icon}</span>
          )}
          {option.label}
        </div>
      );
    };

    const renderLabelElement = () => {
      if (renderLabel) return renderLabel(label);
      if (!label) return null;
      return labelPlacement === "floating" ? (
        <label
          htmlFor={`${id}-input`}
          className={`multi-select-label-floating ${labelClassName} ${
            errorMessage ? "text-danger" : ""
          }`}
          style={labelStyle}
        >
          {labelContent}
        </label>
      ) : (
        <label
          htmlFor={`${id}-input`}
          className={`multi-select-label ${labelClassName} ${
            errorMessage ? "text-danger" : ""
          }`}
          style={labelStyle}
        >
          {labelContent}
        </label>
      );
    };

    return (
      <div
        className={`multi-select ${disabled ? "disabled" : ""} ${className}`}
        ref={combinedRef}
        style={style}
        {...restProps}
      >
        {errorMessage && (
          <div
            className="text-danger text-end text-sm"
            style={{ margin: 0, padding: 0, marginBottom: "8px" }}
          >
            {errorMessage}
          </div>
        )}
        {labelPlacement === "default" && renderLabelElement()}

        {/* 
          The "trigger" container that shows selected values (or placeholder). 
          Clicking it toggles the dropdown. 
        */}
        <div
          className={`multi-select-container ${
            isMulti ? "multi-select-container-multi" : "single-select-container"
          } mb-3 ${
            errorMessage && errorMessage.length > 0 ? "border-danger" : ""
          } ${containerClassName} ${
            labelPlacement === "floating" ? "has-floating-label" : ""
          }`}
          style={containerStyle}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown} // so ArrowDown/Enter also works when focused here
          role="button"
          tabIndex={0}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {labelPlacement === "floating" && renderLabelElement()}

          {/* For multi-select, show tags; for single-select, show the first value or placeholder */}
          <div className="multi-select-tags">
            {isMulti ? (
              <>
                {selectedValues.map((val) => {
                  const option = options.find((o) => o.value === val);
                  return (
                    option &&
                    (renderTag
                      ? renderTag(option, () => handleRemoveOption(val))
                      : renderDefaultTag(option, () => handleRemoveOption(val)))
                  );
                })}
                {/* Display placeholder if no values are selected */}
                {selectedValues.length === 0 && (
                  <span
                    className="multi-select-placeholder"
                    style={{ padding: "0.4rem", color: "#6c757d" }}
                  >
                    {placeholder}
                  </span>
                )}
              </>
            ) : (
              <>
                {/* Single-select: show the label of the selected option or placeholder */}
                {(() => {
                  const singleVal = selectedValues[0];
                  const opt = options.find((o) => o.value === singleVal);
                  const displayLabel = opt ? opt.label : placeholder;
                  return (
                    <span className="single-select-display">
                      {displayLabel}
                    </span>
                  );
                })()}
              </>
            )}
          </div>

          {/* Clear-All button (only if multi, etc.) */}
          {isMulti &&
            showClearAll &&
            selectedValues.length > 0 &&
            !disabled && (
              <>
                {renderClearButton ? (
                  renderClearButton(handleClearAll)
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClearAll();
                    }}
                    className={`multi-select-clear ${clearButtonClassName}`}
                    aria-label="Clear all selected options"
                  >
                    {clearAllIcon ? (
                      <span
                        className={`multi-select-clear-icon ${clearAllIconClassName}`}
                        style={clearAllIconStyle}
                      >
                        {clearAllIcon}
                      </span>
                    ) : (
                      "Clear All"
                    )}
                  </button>
                )}
              </>
            )}
        </div>

        {/* 
          Actual dropdown (now includes the search input at the top):
        */}
        {isOpen && !disabled && (
          <div
            ref={listboxRef}
            id={`${id}-listbox`}
            role="listbox"
            className={`multi-select-dropdown ${dropdownClassName}`}
            style={dropdownStyle}
            tabIndex={-1}
            aria-multiselectable={isMulti}
          >
            {/* Search box at the top of the dropdown */}
            <div className="multi-select-dropdown-search">
              <input
                ref={inputRef}
                type="text"
                className={`multi-select-input ${inputClassName}`}
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={handleSearch}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
                aria-activedescendant={activeDescendant}
                aria-controls={`${id}-listbox`}
                autoComplete="off"
                id={`${id}-input`}
              />
            </div>

            {/* Render list of filtered options */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) =>
                renderOption
                  ? renderOption(option, highlightedIndex === index, index)
                  : renderDefaultOption(
                      option,
                      highlightedIndex === index,
                      index
                    )
              )
            ) : renderNoOptions ? (
              renderNoOptions()
            ) : (
              <div className="multi-select-no-options">
                {options.length === 0 ? noOptionsMessage : noMatchesMessage}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

const SingleSelect = forwardRef((props, ref) => {
  const { options = [], placeholder = "Select options...", ...rest } = props;
  let newOptions = options;
  if (!newOptions.some((opt) => opt.value === "")) {
    newOptions = [{ value: "", label: placeholder }, ...newOptions];
  }
  return (
    <MultiSelect
      {...rest}
      options={newOptions}
      isMulti={false}
      containerClassName={props.containerClassName || "form-select p-0 m-0"}
      labelPlacement={props.labelPlacement || "floating"}
      showClearAll={false}
      ref={ref}
      placeholder={placeholder}
    />
  );
});

export { MultiSelect, SingleSelect };

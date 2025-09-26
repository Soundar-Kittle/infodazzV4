import { X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const MultiSelect = ({
  label,
  name,
  options = [],
  value = [],
  onChange,
  placeholder = "",
  searchPlaceholder = "Search...",
  closeOnSelect = false,
  labelPlacement = "default",
  showClearAll = false,
  required = false,
  isMulti = false,
  isSearchable = false,
  disabled = false,
  selectable = false,
  component = null,
  labelComponent = null,
  errors = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [selectAll, setSelectAll] = useState(false);
  const wrapperRef = useRef(null);

  // Ensure value is always an array for consistent handling
  const valueArray = Array.isArray(value)
    ? value
    : value !== undefined && value !== null
    ? [value]
    : [];

  const toggleDropdown = () => !disabled && setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOptions = options.filter((opt) =>
    selectable || isMulti ? valueArray.includes(opt.value) : opt.value === value
  );

  const filteredOptions = options.filter((opt) => {
    const res = selectable
      ? opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      : opt.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (isMulti ? !valueArray.includes(opt.value) : true);
    return res;
  });

  const handleSelect = (selectedValue) => {
    let newValue;

    if (isMulti) {
      if (valueArray.includes(selectedValue)) {
        newValue = valueArray.filter((v) => v !== selectedValue); // Toggle off
      } else {
        newValue = [...valueArray, selectedValue];
      }
    } else {
      newValue = selectedValue;
    }

    onChange?.(newValue);
    if (closeOnSelect || !isMulti) closeDropdown();
  };

  const handleRemove = (val) => {
    const updated = valueArray.filter((v) => v !== val);
    onChange?.(updated);
  };

  const clearAll = () => {
    onChange?.(isMulti ? [] : null);
    setSearchTerm("");
    setSelectAll(false);
  };

  const handleSelectAllToggle = () => {
    const filteredIds = filteredOptions.map((f) => f.value);
    if (selectAll) {
      onChange?.(valueArray.filter((v) => !filteredIds.includes(v)));
    } else {
      const uniqueSet = new Set([...valueArray, ...filteredIds]);
      onChange?.([...uniqueSet]);
    }
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    const allSelected =
      filteredOptions.length > 0 &&
      filteredOptions.every((f) =>
        selectable ? valueArray.includes(f.value) : value === f.value
      );
    setSelectAll(allSelected);
  }, [searchTerm, value, options]);

  const handleKeyDown = (e) => {
    if (!isOpen || filteredOptions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev + 1 >= filteredOptions.length ? 0 : prev + 1
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev - 1 < 0 ? filteredOptions.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (highlightIndex !== -1) {
        const selected = filteredOptions[highlightIndex];
        if (selected) handleSelect(selected.value);
      }
    }
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      {/* Label */}
      {label && labelPlacement === "floating" ? (
        <label
          htmlFor={name}
          className={`absolute z-10 text-sm px-1 bg-white left-2 -top-2.5 ${
            required
              ? "after:content-['*'] after:ml-0.5 after:text-red-500"
              : ""
          }`}
        >
          {label}
        </label>
      ) : label ? (
        <label
          htmlFor={name}
          className="flex items-center gap-2 text-sm font-medium mb-0.5"
        >
          <div className="">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </div>
          {labelComponent && labelComponent}
        </label>
      ) : null}

      {/* Selected View */}
      <div
        className={`border rounded-sm p-1.5 pl-2 cursor-pointer flex flex-wrap items-center gap-2 ${
          disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "border-gray-300"
        }`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions.map((opt) => (
            <span
              key={opt.value}
              className={`${
                isMulti
                  ? "bg-gray-200 text-xs py-0.5 rounded-full text-gray-700"
                  : ""
              } px-2 text-sm flex items-center gap-1`}
            >
              {opt.label}
              {isMulti && !disabled && (
                <button
                  type="button"
                  className="text-xs text-red-500 ml-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(opt.value);
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-sm">
            {placeholder || `Select ` + label}
          </span>
        )}

        {showClearAll && isMulti && selectedOptions.length > 0 && !disabled && (
          <button
            type="button"
            className="ml-auto text-xs text-red-500 hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && !disabled && (
        <div className="absolute z-10 bg-white border rounded-md mt-1 shadow-md w-full max-h-60 overflow-auto">
          {isSearchable && (
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setHighlightIndex(0);
              }}
              className="w-full border-b outline-none text-sm p-2 pl-4 sticky top-0 bg-white"
            />
          )}

          {/* Select All */}
          {selectable && isMulti && filteredOptions.length > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 border-b text-sm">
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllToggle}
                  className="accent-primary mr-2"
                />
                Select All
              </label>
            </div>
          )}
          {filteredOptions.length > 0 || (!isMulti && value) ? (
            <>
              {/* Empty option for single-select */}
              {!isMulti && value !== null && (
                <div
                  className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    onChange?.(null);
                    closeDropdown();
                  }}
                >
                  Select an option
                </div>
              )}

              {filteredOptions.map((opt, idx) => {
                const isSelected = isMulti
                  ? valueArray.includes(opt.value)
                  : value === opt.value;
                const isHighlighted = highlightIndex === idx;

                return (
                  <div
                    key={opt.value}
                    className={`
            px-4 py-2 flex items-center gap-2 text-sm cursor-pointer transition-colors
            ${
              isSelected && isHighlighted
                ? "bg-primary/90 border border-white text-brand-gold font-semibold"
                : isSelected
                ? "bg-primary/90 text-white"
                : isHighlighted
                ? "bg-primary/50 text-white"
                : "hover:bg-primary/10 hover:text-primary"
            }
          `}
                    onClick={() => handleSelect(opt.value)}
                  >
                    {selectable && isMulti && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        className="accent-brand-gold"
                      />
                    )}
                    {opt.label}
                  </div>
                );
              })}
            </>
          ) : (
            <div className="px-4 py-2 text-sm text-gray-400">No options</div>
          )}
        </div>
      )}

      {/* Error */}
      {errors?.[name] && (
        <p className="text-sm text-red-500 text-end">{errors[name]?.message}</p>
      )}

      {component && component}
    </div>
  );
};

export default MultiSelect;

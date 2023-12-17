#pragma once

#include <chrono>
#include <functional>
#include <iostream>

inline void DisplayElapsed(const std::string &name, double const durationUs) {
    double const ms{durationUs * 0.001};
    std::cout << name << " : " << durationUs << "us (" << ms << "ms)" << std::endl;
}

template <typename Period = std::micro> class ScopedTimer {
    using Clock = std::chrono::steady_clock;

public:
    ScopedTimer()
        : ScopedTimer("unnamed") {}

    ScopedTimer(const std::string name)
        : ScopedTimer(name, DisplayElapsed) {}

    ScopedTimer(const std::string name, std::function<void(std::string const &, double const &)> callback)
        : m_last(Clock::now())
        , m_callback(callback)
        , m_name(name) {}

    ~ScopedTimer() { m_callback(m_name, elapsed()); }

    void reset() { m_last = Clock::now(); }

    double elapsed() const {
        return std::chrono::duration<double, Period>(Clock::now() - m_last).count();
    }

private:
    std::chrono::time_point<Clock> m_last;
    std::function<void(std::string const &, double const &)> m_callback;
    std::string m_name;
};

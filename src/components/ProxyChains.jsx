/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const ProxyChains = ({ t }) => {
  return (
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div 
        class="flex items-center justify-between cursor-pointer mb-4"
        x-on:click="toggleAccordion('proxyChains')"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
             <i class="fas fa-link text-gray-400"></i>
             {t('proxyChains') || 'Proxy Chains'}
        </h3>
        <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" x-bind:class="accordionSections.proxyChains ? 'rotate-180' : ''"></i>
      </div>

      <div x-show="accordionSections.proxyChains" x-collapse>
        <div class="space-y-4">
            {/* Info Message */}
            <div class="text-sm text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30 flex gap-2">
                <i class="fas fa-info-circle mt-0.5 text-blue-500"></i>
                <span>Create a relay chain: Entry Node &rarr; Exit Node &rarr; Target.</span>
            </div>

          <template x-for="(chain, index) in proxyChains" x-bind:key="index">
            <div class="flex flex-col gap-3 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg group text-sm relative border border-gray-100 dark:border-gray-700">
                <button type="button" x-on:click="proxyChains.splice(index, 1)" class="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors p-1">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <div class="flex flex-col gap-1.5">
                        <label class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('chainName') || 'Chain Name'}</label>
                        <input type="text" x-model="chain.name" placeholder="Name" class="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                    </div>
                     <div class="flex flex-col gap-1.5">
                        <label class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('entryNodeRegex') || 'Entry Node (Regex)'}</label>
                        <input type="text" x-model="chain.entryRegex" placeholder="Regex" class="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono" />
                    </div>
                     <div class="flex flex-col gap-1.5">
                        <label class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('exitNodeRegex') || 'Exit Node (Regex)'}</label>
                        <input type="text" x-model="chain.exitRegex" placeholder="Regex" class="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono" />
                    </div>
                </div>
            </div>
          </template>

          <button type="button" x-on:click="proxyChains.push({ name: '', entryRegex: '', exitRegex: '' })" class="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center">
            <i class="fas fa-plus mr-2"></i> {t('add') || 'Add Chain'}
          </button>
        </div>
      </div>
    </div>
  );
};

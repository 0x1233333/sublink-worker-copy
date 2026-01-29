/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const CustomNodeGroups = ({ t }) => {
  return (
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div 
        class="flex items-center justify-between cursor-pointer mb-4"
        x-on:click="toggleAccordion('customNodeGroups')"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fas fa-layer-group text-gray-400"></i>
            {t('customNodeGroups') || 'Custom Node Groups'}
        </h3>
        <i class="fas fa-chevron-down text-gray-400 transition-transform duration-200" x-bind:class="accordionSections.customNodeGroups ? 'rotate-180' : ''"></i>
      </div>

      <div x-show="accordionSections.customNodeGroups" x-collapse>
        <div class="space-y-4">
          <template x-for="(group, index) in customNodeGroups" x-bind:key="index">
            <div class="flex flex-col sm:flex-row gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg group text-sm relative">
                <input type="text" x-model="group.name" x-bind:placeholder="t('groupName') || 'Group Name'" class="flex-1 px-3 py-2 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                <input type="text" x-model="group.regex" x-bind:placeholder="t('regexFilter') || 'Regex Filter'" class="flex-[2] px-3 py-2 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono" />
                <button type="button" x-on:click="customNodeGroups.splice(index, 1)" class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
          </template>

          <button type="button" x-on:click="customNodeGroups.push({ name: '', regex: '' })" class="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center">
            <i class="fas fa-plus mr-2"></i> {t('add') || 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};
